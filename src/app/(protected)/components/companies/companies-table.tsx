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
import { allCompanies } from "@/constants/dashboard";

export const CompaniesTable = () => {
  return (
    <div className="space-y-4 mt-5">
      {/* header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="flex flex-col gap-2 w-full lg:w-auto">
          <h1 className="text-base font-medium text-[#212121]">
            All Companies
          </h1>
          <p className="text-neutral-100 text-sm font-normal">
            View and manage company accounts
          </p>
        </div>

        {/* search & actions Bar */}
        <div className="flex items-center w-full lg:w-auto">
          <div className="relative w-full lg:w-[320px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-100 h-4 w-4" />
            <Input
              placeholder="Search companies"
              className="pl-10 border-[#E2E8F0] text-neutral-100 placeholder:text-xs focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none w-full"
            />
          </div>
        </div>
      </div>

      {/* table */}
      <div className="rounded-md border-b border-[#E2E8F0] overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-[#E2E8F0]">
              <TableHead className="font-medium text-sm text-[#212121] leading-5">
                Company
              </TableHead>
              <TableHead className="font-medium text-sm text-[#212121] leading-5">
                HR/Admin
              </TableHead>
              <TableHead className="font-medium text-sm text-[#212121] leading-5">
                Email
              </TableHead>
              <TableHead className="font-medium text-sm text-[#212121] leading-5">
                Onboarded
              </TableHead>
              <TableHead className="font-medium text-sm text-[#212121] leading-5 text-right">
                Employees
              </TableHead>
              <TableHead className="font-medium text-sm text-[#212121] leading-5 text-right">
                Total Orders
              </TableHead>
              <TableHead className="font-medium text-sm text-[#212121] leading-5 pl-8">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allCompanies.map((company) => (
              <TableRow
                key={company.id}
                className="hover:bg-orange-50 text-[#3C3028] border-[#E2E8F0]"
              >
                <TableCell className="font-normal text-sm text-[#212121] leading-5">
                  {company.company}
                </TableCell>
                <TableCell className="font-normal text-sm text-[#212121] leading-5">
                  {company.hrAdmin}
                </TableCell>
                <TableCell className="font-normal text-sm text-neutral-100 leading-5">
                  {company.email}
                </TableCell>
                <TableCell className="font-normal text-sm text-[#212121] leading-5">
                  {company.onboarded}
                </TableCell>
                <TableCell className="text-right font-normal text-sm text-[#212121] leading-5">
                  {company.employees}
                </TableCell>
                <TableCell className="text-right font-normal text-sm text-[#212121] leading-5">
                  {company.totalOrders}
                </TableCell>
                <TableCell className="pl-8">
                  <Badge
                    variant="secondary"
                    className={cn(
                      "px-3 py-1 text-xs font-medium rounded-lg",
                      company.status === "Active"
                        ? "bg-[#F0FDF4] text-[#008236] border-[0.8px] border-[#B9F8CF]"
                        : "bg-[#FFF4F3] text-[#FF5F57] border-[0.8px] border-[#FFCDCD]",
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
