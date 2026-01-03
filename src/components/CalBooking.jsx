import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <button data-cal-namespace="15min"
    data-cal-link="harshchaudhary/15min"
    
    data-cal-config='{"layout":"month_view"}'
  >Click me</button>;
};
  