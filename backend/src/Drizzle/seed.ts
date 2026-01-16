import "dotenv/config";
import  db  from "../Drizzle/db";
import { systemUsers } from "./schema.js";

async function seed() {
  console.log("Seeding system_users...");

  await db.insert(systemUsers).values([
    {
      fullName: "Emmanuel Mose",
      email: "emmanuel.mose@example.com",
      registrationNumber: "ABC/B/24-00001/2024",
      role: "Admin",
      isActive: true
    },
    {
      fullName: "Grace Wanjiru",
      email: "grace.wanjiru@example.com",
      registrationNumber: "DEF/C/24-00002/2024",
      role: "User",
      isActive: true
    },
    {
      fullName: "Brian Otieno",
      email: "brian.otieno@example.com",
      registrationNumber: "GHI/D/24-00003/2024",
      role: "User",
      isActive: true
    },
    {
      fullName: "Faith Njeri",
      email: "faith.njeri@example.com",
      registrationNumber: "JKL/E/24-00004/2024",
      role: "Moderator",
      isActive: true
    },
    {
      fullName: "Kevin Mutua",
      email: "kevin.mutua@example.com",
      registrationNumber: "MNO/F/24-00005/2024",
      role: "User",
      isActive: false
    }
  ]);

  console.log("system_users seeded successfully");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
