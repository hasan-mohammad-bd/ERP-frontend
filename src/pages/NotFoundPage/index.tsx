import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-5xl h-screen grid place-items-center">
      <div>
        <img src="/image/404page.png" className="w-[1000px] h-[600px]" />
        <p className="font-[500] mt-3">
          Oops! The Page You're Looking For Doesn't Exist.
        </p>
        <Link to="/" className="flex justify-center pt-10">
          <Button className="px-7 py-6">Back To Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
