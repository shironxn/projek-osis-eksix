import FirebaseConfig from "@/firebase/firebase.config";
import { set, ref, push, serverTimestamp } from "firebase/database";
import dataTPAS from "@/types/tpas.type";

class TPAS implements dataTPAS {
  name: string;
  aspirasi: string;
  timestamp: object;

  constructor(data: dataTPAS) {
    this.name = data.name;
    this.aspirasi = data.aspirasi;
    this.timestamp = serverTimestamp();
  }

  async sendData() {
    try {
      const db = FirebaseConfig();
      const newData = push(ref(db, "TPAS"));

      await set(newData, {
        ...this,
      });

      return "Data Sent Successfully";
    } catch (error) {
      console.error("Error sending data:", error);
      throw new Error("Error sending data");
    }
  }
}

export default TPAS;
