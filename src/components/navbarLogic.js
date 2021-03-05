import { useState } from "react";
// eslint-disable-next-line import/prefer-default-export

export function useOrderCountHook(initial) {
  const [orderCount, setOrderCount] = useState({ count: initial });
  const changeOrderCount = (countt) => {
    setOrderCount({ count: countt });
  };
  return { orderCount, changeOrderCount };
}

export function useShowProfile() {
  const [profile, setProfile] = useState({ name: "Ankit", email: "asuryawanshi@bestpeers.com" });
  const changeProfile = () => {
    setProfile({});
  };
  return { profile, changeProfile };
}

export function useHandleLogout() {
  localStorage.removeItem("token");
  const loginStateChange = (props) => {
    props.history.push("/");
  };

  return { loginStateChange };
}

export function useFetchDeveloperData() {
  const showingDeveloper = (props) => {
    props.history.push("/showDeveloper");
  };

  return { showingDeveloper };
}

export function useFetchTaskData() {
  const showTask = (props) => {
    props.history.push("/showTask");
  };

  return { showTask };
}
