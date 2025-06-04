"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";


// Dummy data for demonstration
const loans = [
    {
        id: 1,
        borrower: "Alice Johnson",
        amount: 5000,
        status: "Approved",
        date: "2024-06-01",
    },
    {
        id: 2,
        borrower: "Bob Smith",
        amount: 3000,
        status: "Pending",
        date: "2024-06-05",
    },
    {
        id: 3,
        borrower: "Charlie Brown",
        amount: 7000,
        status: "Rejected",
        date: "2024-06-10",
    },
];

export default function LoansPage() {
    return (
        <div className="container mx-auto ">
            <Card className="shadow-lg ml-4 mr-4">
                <CardHeader>
                    <CardTitle>Loans</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Borrower</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loans.map((loan) => (
                                <TableRow key={loan.id}>
                                    <TableCell>{loan.id}</TableCell>
                                    <TableCell>{loan.borrower}</TableCell>
                                    <TableCell>${loan.amount.toLocaleString()}</TableCell>
                                    <TableCell>{loan.status}</TableCell>
                                    <TableCell>{loan.date}</TableCell>
                                    <TableCell>
                                        <Button variant="outline" size="sm">
                                            View
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}