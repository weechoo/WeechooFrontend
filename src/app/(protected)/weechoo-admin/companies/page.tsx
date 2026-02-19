"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import CompaniesTable from "../../components/companies/CompaniesTable";
import CompanyStats from "../../components/companies/CompanyStats";
import AddCompanyModal from "@/components/modals/AddCompanyModal";

export default function CompaniesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-neutral-black">Companies</h2>
          <p className="text-neutral-100 text-sm font-normal">
            Manage registered companies
          </p>
        </div>

        <Button
          className="w-fit rounded-lg text-sm font-medium"
          onClick={() => setOpen(true)}
        >
          Add Company
        </Button>
      </div>

      <CompanyStats />
      <CompaniesTable />

      <AddCompanyModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
