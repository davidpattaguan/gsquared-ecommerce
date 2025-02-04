import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LogOutForm from "../components/forms/logout-form";

const LogoutPage = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] w-screen">
      <div className="w-96">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Logout?</CardTitle>
            <CardDescription>We Will Miss You</CardDescription>
          </CardHeader>
          <CardContent>
            <LogOutForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LogoutPage;
