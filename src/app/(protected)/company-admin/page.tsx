import CompaniesTable from "../components/companies/CompaniesTable";
import CompanyStats from "../components/companies/CompanyStats";

export default function CompanyAdminDashboard() {
  return (
    <>
      <CompanyStats />
      <CompaniesTable />
    </>
  );
}
