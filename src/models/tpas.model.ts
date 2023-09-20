import FirebaseConfig from "@/firebase/firebase.config";
import { set, ref, push, serverTimestamp, onValue } from "firebase/database";
import dataTPAS from "@/types/tpas.type";

class TPAS implements dataTPAS {
  name;
  message;
  timestamp: number | null;

  constructor(data: dataTPAS) {
    data.name !== "" ? (this.name = data.name) : (this.name = "Anonymous");
    this.message = data.message;
    this.timestamp = null;
  }

  static async getData(): Promise<any> {
    try {
      const dataRef = ref(FirebaseConfig(), "TPAS");

      return new Promise((resolve, reject) => {
        onValue(
          dataRef,
          (snapshot) => {
            const data = snapshot.val();
            resolve(data);
          },
          (error) => {
            reject(new Error("Error Getting Data"));
          }
        );
      });
    } catch (error) {
      throw new Error("Error Getting Data");
    }
  }

  async sendData(): Promise<any> {
    try {
      const dataRef = push(ref(FirebaseConfig(), "TPAS"));

      const newKey = dataRef.key;

      await set(dataRef, {
        ...this,
        timestamp: serverTimestamp(),
      });

      if (newKey) {
        const dataRefWithKey = {
          ...this,
          timestamp: serverTimestamp(),
          key: newKey,
        };
        return dataRefWithKey;
      }
    } catch (error) {
      throw new Error("Error Sending Data:");
    }
  }
}

export default TPAS;
