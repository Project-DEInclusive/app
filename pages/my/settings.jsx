/*    Imports    */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import 'react-notifications/lib/notifications.css';
import Head from "next/head";
import dynamic from "next/dynamic";

import useUserStore from "../../constants/stores/userstore";

const Add = dynamic(() => import("../editor/users/add"));

import fetcher from "../../constants/fetch/user";

const Settings = () => {
  const [editingData, setEditingData] = useState(null);
  const [loadingSingle, setLoadingSingle] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);

  const user = useUserStore((state) => state);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    if (!user.value) return;
    const dta = await fetcher.getById(user.value.id, {}, setLoadingSingle);
    if (dta) {
      setEditingData(dta);
    }
  };

  // update the data
  const updateRecord = async (item) => {
    const usr = await fetcher.update(item, false, setLoadingUpdate);
    if (usr) {
      setUpdateStatus(true);
      console.log(usr);
      NotificationManager.success("Updated Successfully!", "Success");
      //   ref && ref.callChildFunction();
    } else {
      alert("Failed To update User.");
    }
  };
  return (
    <div className="max-w-7xl mt-10 mx-auto px-5">
      <h1 className="text-2xl font-bold text-center mb-10">My Details</h1>
      {editingData && (
        <Add
          data={editingData}
          edit={true}
          readOnlyProps={["email"]}
          onSubmit={updateRecord}
          onCancel={() => {}}
        />
      )}
       <NotificationContainer />
    </div>
  );
};

export default Settings;

Settings.layout = "main";
