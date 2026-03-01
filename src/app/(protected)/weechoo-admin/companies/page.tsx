"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CompaniesTable from "../../components/companies/companies-table";
import CompanyStats from "../../components/companies/company-stats";
import AddCompanyModal from "@/components/modals/add-company-modal";
import EmptyState from "@/components/common/empty-state";
import Loader from "@/components/common/loader";
import { allCompanies } from "@/constants/dashboard";

export default function CompaniesPage() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [companies] = useState(allCompanies);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-100">
        <Loader size="lg" />
      </div>
    );
  }

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

      {companies && companies.length > 0 ? (
        <>
          <CompanyStats />
          <CompaniesTable />
        </>
      ) : (
        <EmptyState
          title="No companies found"
          description="You haven't added any companies yet. Get started by adding your first company."
        />
      )}

      <AddCompanyModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
