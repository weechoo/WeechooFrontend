"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AddModalContainer from "./add-modal-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import Loader from "@/components/common/loader";
import { useCompanyService } from "@/hooks/use-company-service";
import { handleApiError } from "@/lib/errors";
import { useAuth } from "@/hooks/useAuth";

const companySchema = z.object({
  name: z.string().min(2, "Company name is required"),
  adminName: z.string().min(2, "Admin name is required"),
  address: z.string().min(3, "Address is required"),
  adminEmail: z.string().email("Invalid email"),
  adminPhone: z.string().min(7, "Phone number is required"),
});

type CompanyFormValues = z.infer<typeof companySchema>;

interface AddCompanyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddCompanyModal({
  open,
  onOpenChange,
}: AddCompanyModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { createCompany } = useCompanyService();
  const { logout } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CompanyFormValues>({
    resolver: zodResolver(companySchema),
  });

  const onSubmit = async (data: CompanyFormValues) => {
    try {
      setIsSubmitting(true);

      const payload = {
        ...data,
      };

      await createCompany(payload);

      toast.success("Company Added Successfully", {
        description: `${data.name} has been onboarded.`,
      });

      reset();
      onOpenChange(false);
    } catch (error) {
      const apiError = handleApiError(error);

      if (apiError.code === "TOKEN_EXPIRED") {
        toast.error("Session expired", {
          description: "Please log in again.",
        });
        logout();
        return;
      }

      toast.error("Company creation failed", {
        description: apiError.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AddModalContainer
      open={open}
      onOpenChange={onOpenChange}
      title="Onboard New Company"
      description="Create a new company account"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* company Name */}
        <div className="space-y-2">
          <Label className="text-xs font-medium text-neutral-black">
            Company Name
          </Label>
          <Input
            placeholder="E.g. Acme Corp"
            className="rounded-xl py-5"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label className="text-xs font-medium text-neutral-black">
            Admin Name
          </Label>
          <Input
            placeholder="E.g. John Doe"
            className="rounded-xl py-5"
            {...register("adminName")}
          />
          {errors.adminName && (
            <p className="text-xs text-red-500">{errors.adminName.message}</p>
          )}
        </div>

        {/* admin email */}
        <div className="space-y-2">
          <Label className="text-xs font-medium text-neutral-black">
            Admin Email
          </Label>
          <Input
            placeholder="hr@company.com"
            className="rounded-xl py-5"
            {...register("adminEmail")}
          />
          {errors.adminEmail && (
            <p className="text-xs text-red-500">{errors.adminEmail.message}</p>
          )}
        </div>

        {/* admin phone */}
        <div className="space-y-2">
          <Label className="text-xs font-medium text-neutral-black">
            Admin Phone Number
          </Label>
          <Input
            placeholder="0201234567"
            className="rounded-xl py-5"
            {...register("adminPhone")}
          />
          {errors.adminPhone && (
            <p className="text-xs text-red-500">{errors.adminPhone.message}</p>
          )}
        </div>

        {/* address */}
        <div className="space-y-2">
          <Label className="text-xs font-medium text-neutral-black">
            Address
          </Label>
          <Input
            placeholder="123 Main St, Accra"
            className="rounded-xl py-5"
            {...register("address")}
          />
          {errors.address && (
            <p className="text-xs text-red-500">{errors.address.message}</p>
          )}
        </div>

        {/* buttons */}
        <div className="flex justify-end gap-3 pt-6">
          <Button
            type="button"
            variant="secondary"
            className="px-8 py-2 border-[0.65px] bg-[#F8FAFD] text-gray-100 rounded-xl cursor-pointer text-sm w-fit font-medium"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>

          <Button
            type="submit"
            className="px-5 py-2 flex w-fit rounded-xl text-sm font-medium bg-primary-100 cursor-pointer text-white"
          >
            {isSubmitting ? (
              <>
                <Loader size="sm" />
                Adding...
              </>
            ) : (
              "Add Company"
            )}
          </Button>
        </div>
      </form>
    </AddModalContainer>
  );
}
