"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useLoans from "@/hooks/useLoans";
import { Button } from "@/components/ui/button";
import { User, MapPin, Building2, Download } from "lucide-react";
import Cookies from "js-cookie";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";
import GeneralDataCard from "@/components/GeneralDataCard";
import ScoringCard from "@/components/ScoringCard";
import LoansSummaryCard from "@/components/LoansSummaryCard";
import ReportedAddressesCard from "@/components/ReportedAddressesCard";
import EmploymentAddressesCard from "@/components/EmploymentAddressesCard";
import DownloadReportCard from "@/components/DownloadReportCard";
import useUser from "@/hooks/useUser";
import PaymentForm from "@/app/payment/page";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

// Animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function LoansPage() {
  const { creditos, loading, error } = useLoans();
  const { user } = useUser();
  const isPaid = Cookies.get("pagada");

  if (!isPaid) {
    return <PaymentForm />;
  }

  if (error) return <ErrorState error={error} />;

  return (
    <div className="h-screen flex flex-col overflow-hidden md:px-6">
      <div className="flex-1 overflow-y-auto p-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {/* Left Column - 75% width */}
          <motion.div variants={itemVariants} className="space-y-6 lg:col-span-3">
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {loading ? (
                <GeneralDataCardSkeleton />
              ) : (
                <motion.div variants={cardVariants} className="md:col-span-2">
                  <GeneralDataCard user={user} />
                </motion.div>
              )}
              {loading ? (
                <ScoringCardSkeleton />
              ) : (
                <motion.div variants={cardVariants} className="md:col-span-1">
                  <ScoringCard creditos={creditos} />
                </motion.div>
              )}
            </motion.div>

            {loading ? (
              <LoansSummaryCardSkeleton />
            ) : (
              <motion.div variants={itemVariants}>
                <LoansSummaryCard creditos={creditos} />
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - 25% width */}
          <motion.div variants={itemVariants} className="space-y-6 lg:col-span-1">
            {loading ? (
              <ReportedAddressesCardSkeleton />
            ) : (
              <motion.div variants={cardVariants}>
                <ReportedAddressesCard />
              </motion.div>
            )}
            {loading ? (
              <EmploymentAddressesCardSkeleton />
            ) : (
              <motion.div variants={cardVariants}>
                <EmploymentAddressesCard />
              </motion.div>
            )}
            <motion.div variants={cardVariants}>
              <DownloadReportCard creditos={creditos} user={user} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function LoansSummaryCardSkeleton() {
  return (
    <Card className="shadow-sm card-gradient">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-foreground">
          <Skeleton className="h-6 w-48 bg-muted-foreground/20" />
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/50 space-y-2">
              <Skeleton className="h-6 w-12 mx-auto bg-muted-foreground/20" />
              <Skeleton className="h-4 w-24 mx-auto bg-muted-foreground/20" />
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-4 space-y-3">
          <Skeleton className="h-5 w-40 bg-muted-foreground/20" />
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b border-border"
            >
              <div className="space-y-1">
                <Skeleton className="h-4 w-24 bg-muted-foreground/20" />
                <Skeleton className="h-3 w-28 bg-muted-foreground/20" />
              </div>
              <div className="text-right space-y-1">
                <Skeleton className="h-4 w-16 ml-auto bg-muted-foreground/20" />
                <Skeleton className="h-3 w-20 ml-auto bg-muted-foreground/20" />
                <Skeleton className="h-3 w-28 ml-auto bg-muted-foreground/20" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function GeneralDataCardSkeleton() {
  return (
    <Card className="shadow-sm md:col-span-2 card-gradient">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-foreground">
          <Skeleton className="h-6 w-40 bg-muted-foreground/20" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex justify-between items-center">
            <Skeleton className="h-4 w-32 bg-muted-foreground/20" />
            <Skeleton className="h-4 w-40 bg-muted-foreground/20" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function ScoringCardSkeleton() {
  return (
    <Card className="shadow-sm md:col-span-1 card-gradient">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-foreground">
          <Skeleton className="h-6 w-24 bg-muted-foreground/20" />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-8 space-y-3">
        <Skeleton className="h-10 w-16 rounded-full bg-muted-foreground/20" />
        <Skeleton className="h-4 w-32 bg-muted-foreground/20" />
        <Skeleton className="h-3 w-28 bg-muted-foreground/20" />
        <div className="w-full bg-muted rounded-full h-2 mt-4 overflow-hidden">
          <Skeleton className="h-2 w-1/3 bg-primary/30" />
        </div>
      </CardContent>
    </Card>
  );
}

function ReportedAddressesCardSkeleton() {
  return (
    <Card className="shadow-sm card-gradient">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <MapPin className="w-5 h-5 text-muted-foreground" />
          <Skeleton className="h-5 w-44 bg-muted-foreground/20" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {[...Array(2)].map((_, idx) => (
          <div
            key={idx}
            className={`border-l-4 ${
              idx === 0 ? "border-primary" : "border-border"
            } pl-4 py-2 space-y-1`}
          >
            <Skeleton className="h-4 w-32 bg-muted-foreground/20" />
            <Skeleton className="h-3 w-60 bg-muted-foreground/20" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function EmploymentAddressesCardSkeleton() {
  return (
    <Card className="shadow-sm card-gradient">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Building2 className="w-5 h-5 text-muted-foreground" />
          <Skeleton className="h-5 w-40 bg-muted-foreground/20" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="border-l-4 border-primary pl-4 py-2 space-y-1"
          >
            <Skeleton className="h-4 w-32 bg-muted-foreground/20" />
            <Skeleton className="h-3 w-60 bg-muted-foreground/20" />
            <Skeleton className="h-3 w-40 bg-muted-foreground/20" />
            <Skeleton className="h-3 w-48 bg-muted-foreground/20" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}