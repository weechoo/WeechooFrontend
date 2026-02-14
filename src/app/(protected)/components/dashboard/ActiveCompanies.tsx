import { Card } from "@/components/ui/card";
import { companies } from "@/constants/placeholder";

export function ActiveCompanies() {
  return (
    <Card className="p-6 rounded-2xl border-orange-200 border">
      <h3 className="font-semibold mb-6">Active Companies</h3>

      <div className="space-y-6">
        {companies.map((company, i) => (
          <div key={i}>
            <div className="flex gap-4">
              <span className="text-orange-500 font-bold text-lg">
                0{i + 1}
              </span>

              <div>
                <p className="font-medium">{company.name}</p>
                <p className="text-xs text-muted-foreground">
                  {company.region} | {company.employees} Employees
                </p>
              </div>
            </div>

            {i !== companies.length - 1 && (
              <div className="h-px bg-neutral-200 mt-4" />
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
