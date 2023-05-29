import { Observable } from "rxjs";
import { handler } from "~/routes/customer-record/customer_record";

const newCustomerRecord = (formData) =>
  new Observable(async (subscriber) => {
    const response = await handler(formData);
    try {
      console.log(
        "newCustomerRecord",
        formData
        // subscriber
      );
      subscriber.next(response);
      // subscriber.complete();
    } catch (err) {
      subscriber.error(err);
    }
  });

const getNewCustomerRecord = () => {
  return newCustomerRecord;
};

export { newCustomerRecord,getNewCustomerRecord };
