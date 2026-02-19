import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { allCompanies } from "@/constants/placeholder";

export const CompaniesTable = () => {
  return (
    <div className="space-y-4 mt-5">
      {/* header w/ title, desc */}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-neutral-black">
            All Companies
          </h1>
          <p className="text-neutral-100 text-sm font-normal mt-1">
            View and manage company accounts
          </p>
        </div>

        {/* search & actions Bar */}
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-4 w-4" />
            <Input
              placeholder="Search companies..."
              className="pl-10 border-[#E2E8F0] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
      </div>

      {/* table */}
      <div className="rounded-md border-b border-[#E2E8F0] overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-neutral-50 border-[#E2E8F0]">
              <TableHead className="font-semibold text-neutral-600">
                Company
              </TableHead>
              <TableHead className="font-semibold text-neutral-600">
                HR/Admin
              </TableHead>
              <TableHead className="font-semibold text-neutral-600">
                Email
              </TableHead>
              <TableHead className="font-semibold text-neutral-600">
                Onboarded
              </TableHead>
              <TableHead className="font-semibold text-neutral-600 text-right">
                Employees
              </TableHead>
              <TableHead className="font-semibold text-neutral-600 text-right">
                Total Orders
              </TableHead>
              <TableHead className="font-semibold text-neutral-600">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allCompanies.map((company) => (
              <TableRow
                key={company.id}
                className="hover:bg-neutral-50 border-[#E2E8F0]"
              >
                <TableCell className="font-medium text-neutral-900">
                  {company.company}
                </TableCell>
                <TableCell className="text-neutral-600">
                  {company.hrAdmin}
                </TableCell>
                <TableCell className="text-neutral-600">
                  {company.email}
                </TableCell>
                <TableCell className="text-neutral-600">
                  {company.onboarded}
                </TableCell>
                <TableCell className="text-right text-neutral-600">
                  {company.employees}
                </TableCell>
                <TableCell className="text-right text-neutral-600">
                  {company.totalOrders}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={cn(
                      "font-normal px-3 py-1 rounded-full",
                      company.status === "Active"
                        ? "bg-green-100 text-green-700 border-green-200"
                        : "bg-red-100 text-red-700 border-red-200",
                    )}
                  >
                    {company.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CompaniesTable;
