"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CompaniesTable from "../../components/companies/companies-table";
import CompanyStats from "../../components/companies/company-stats";
import AddCompanyModal from "@/components/modals/add-company-modal";
import EmptyState from "@/components/common/empty-state";
import { allCompanies } from "@/constants/dashboard";
import { Skeleton } from "@/components/ui/skeleton";

export default function CompaniesPage() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [companies] = useState(allCompanies);

  // simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">
        {/* header skeleton */}
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-4 w-60" />
          </div>
          <Skeleton className="h-10 w-32 rounded-lg" />
        </div>

        {/* stats skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-32 w-full rounded-xl" />
          ))}
        </div>

        {/* table skeleton */}
        <div className="w-full space-y-4 mt-2">
          <div className="flex justify-between items-center mb-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-10 w-64 rounded-md" />
          </div>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-16 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-neutral-black">Companies</h2>
          <p className="text-neutral-100 text-sm font-normal">
            Manage all registered companies
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
