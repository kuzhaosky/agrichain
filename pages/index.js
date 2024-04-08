import React,{ useState, useEffect, useContext } from "react";

//internal import
import {
  Table,
  Form,
  Services,
  Profile,
  CompleteShipment,
  GetShipment,
  StartShipment,
} from "../Components/index";
import { TrackingContext } from "@/Conetext/Tracking";

const index = () => {
  const {
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    startShipment,
    getShipmentCount,
  } = useContext(TrackingContext);

  //state variable
  const [createShipmentModal, setCreateShipmentModal] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [startModal, setStartModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const [getModal, setGetModal] = useState(false);
  //data state variable
  const [allShipmentsdata, setallShipmentsdata] = useState();

  useEffect(()=>{
    const getCampaignsData = getAllShipment();

    return async() => {
      const allData = await getCampaignsData;
      setallShipmentsdata(allData);
    }
  },[]);

  return (
    <>
      <Services
        setOpenProfile = {setOpenProfile}
        setCompleteModal = {setCompleteModal}
        setGetModal = {setGetModal}
        setStartModal = {setStartModal}
      />
      <Table
        setCreateShipmentModal = {setCreateShipmentModal}
        allShipmentsdata = {allShipmentsdata}
      />
      <Form
        createShipmentModal = {createShipmentModal}
        createShipment = {createShipment}
        setCreateShipmentModal = {setCreateShipmentModal}
      />
      <Profile
        openProfile = {openProfile}
        setOpenProfile = {setOpenProfile}
        currentUser = {currentUser}
        getShipmentCount = {getShipmentCount}
      />
      <CompleteShipment
        completeModal = {completeModal}
        setCompleteModal = {setCompleteModal}
        completeShipment = {completeShipment}
      />
      <GetShipment
        getModal = {getModal}
        setGetModal = {setGetModal}
        getShipment = {getShipment}
      />
      <StartShipment
        startModal = {startModal}
        setStartModal = {setStartModal}
        startShipment = {startShipment}
      />
    </>
  );

};
export default index;