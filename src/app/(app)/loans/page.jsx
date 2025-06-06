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

export default function LoansPage() {
  const { creditos, loading, error } = useLoans();
  const { user } = useUser();

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Left Column - 75% width */}
          <div className="space-y-6 lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GeneralDataCard user={user} />
              <ScoringCard creditos={creditos} />
            </div>
            <LoansSummaryCard creditos={creditos} />
          </div>

          {/* Right Column - 25% width */}
          <div className="space-y-6 lg:col-span-1">
            <ReportedAddressesCard />
            <EmploymentAddressesCard />
            <DownloadReportCard />
          </div>
        </div>
      </div>
    </div>
  );
}