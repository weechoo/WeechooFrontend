"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AddModalContainer from "./add-modal-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

const companySchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  location: z.string().min(2, "Location is required"),
  industry: z.string().min(1, "Select an industry"),
  adminName: z.string().min(2, "Admin/HR full name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Phone number is required"),
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

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<CompanyFormValues>({
    resolver: zodResolver(companySchema),
  });

  const onSubmit = (data: CompanyFormValues) => {
    setIsSubmitting(true);

    console.log("Submitted:", data);

    toast.success("Company Added Successfully", {
      description: `${data.companyName} has been onboarded.`,
    });

    setTimeout(() => {
      reset();
      onOpenChange(false);
      setIsSubmitting(false);
    }, 2500);
  };

  return (
    <AddModalContainer
      open={open}
      onOpenChange={onOpenChange}
      title="Onboard New Company"
      description="Create new company account and add admin details"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Company Name */}
        <div className="space-y-2">
          <Label className="text-xs font-medium text-neutral-black">
            Company Name
          </Label>
          <Input
            placeholder="E.g. TechHub Ghana"
            className="w-full placeholder:text-neutral-100 text-xs font-normal rounded-xl py-5"
            {...register("companyName")}
          />
          {errors.companyName && (
            <p className="text-xs text-red-500">{errors.companyName.message}</p>
          )}
        </div>

        {/* Location + Industry */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-xs font-medium text-neutral-black">
              Location
            </Label>
            <Input
              className="w-full placeholder:text-neutral-100 text-xs font-normal rounded-xl py-5"
              placeholder="E.g. Accra"
              {...register("location")}
            />
            {errors.location && (
              <p className="text-xs text-red-500">{errors.location.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-medium text-neutral-black">
              Industry
            </Label>
            <Select onValueChange={(value) => setValue("industry", value)}>
              <SelectTrigger className="w-full rounded-xl py-5">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tech">Technology</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
              </SelectContent>
            </Select>
            {errors.industry && (
              <p className="text-xs text-red-500">{errors.industry.message}</p>
            )}
          </div>
        </div>

        {/* Admin/HR Full Name */}
        <div className="space-y-2">
          <Label className="text-xs font-medium text-neutral-black">
            Admin/HR Full Name
          </Label>
          <Input
            className="placeholder:text-neutral-100 text-xs font-normal rounded-xl py-5"
            placeholder="E.g. John Doe"
            {...register("adminName")}
          />
          {errors.adminName && (
            <p className="text-xs text-red-500">{errors.adminName.message}</p>
          )}
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-xs font-medium text-neutral-black">
              Email
            </Label>
            <Input
              className="placeholder:text-neutral-100 text-xs font-normal rounded-xl py-5"
              placeholder="(Company email)"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-medium text-neutral-black">
              Phone Number
            </Label>
            <Input
              className="placeholder:text-neutral-100 text-xs font-normal rounded-xl py-5"
              placeholder="Enter contact"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>

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
            {isSubmitting ? "Adding..." : "Add Company"}
          </Button>
        </div>
      </form>
    </AddModalContainer>
  );
}
