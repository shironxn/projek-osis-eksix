import { set, ref, push, serverTimestamp, onValue } from "firebase/database";
import FirebaseConfig from "@/firebase/firebase.config";
import dataTPAS from "@/types/tpas.type";

class TPAS implements dataTPAS {
  name?: string;
  message: string;
  timestamp: number | null;

  constructor(data: dataTPAS) {
    this.name = data.name !== "" ? data.name : "Anonymous";
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
            reject(new Error("Error getting data"));
          }
        );
      });
    } catch (error) {
      console.error("Error getting data:", error);
      throw new Error("Error getting data");
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
      console.error("Error sending data:", error);
      throw new Error("Error sending data");
    }
  }
}

export default TPAS;
