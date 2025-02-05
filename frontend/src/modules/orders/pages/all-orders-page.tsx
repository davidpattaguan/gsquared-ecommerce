import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Shell } from "@/components/layout/shell";
import { AppDispatch, RootState } from "@/store/store";
import { useLocation, useNavigate } from "react-router";
import { fetchOrders } from "../features/slices/orders-slice";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "../components/tables/columns";
const AllOrdersPage = () => {
  const navigate = useNavigate();
  const { orders, loading, error } = useSelector(
    (state: RootState) => state.orders
  );
  const session = useSelector((state: RootState) => state.auth.session);

  useEffect(() => {
    if (!session) {
      navigate("/auth/login");
    }
  }, []);

  const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch

  const location = useLocation();

  useEffect(() => {
    dispatch(fetchOrders(location.search));
  }, [location.search]); // Add location.search as a dependency

  if (loading) {
    return <div className="col-span-full text-center py-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className="col-span-full text-center py-10">Error: {error}</div>
    );
  }

  return (
    <Shell variant={"default"}>
      <h1 className="font-bold text-2xl">My Orders</h1>
      {loading ? (
        <> Loading </>
      ) : (
        <>
          <Suspense fallback={<>Loading</>}>
            <DataTable columns={columns} data={orders} />
          </Suspense>
        </>
      )}
    </Shell>
  );
};

export default AllOrdersPage;
