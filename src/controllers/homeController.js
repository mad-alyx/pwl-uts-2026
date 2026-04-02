import { render } from "../config/viewEngine.js";
import prisma from "../config/prisma.js";

export const home = async (c) => {
  const totalMahasiswa = await prisma.mahasiswa.count();
  const totalDosen = await prisma.dosen.count();
  const totalMatkul = await prisma.matkul.count();
  const mahasiswa = await prisma.mahasiswa.findMany();
  const html = await render("home", {
    title: "Dashboard Bun MVC",
    totalMahasiswa,
    totalDosen,
    totalMatkul,
    mahasiswa,
  });
  return c.html(html);
};
