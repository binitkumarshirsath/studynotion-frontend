import axiosInstance from "..";
import { apiRoutes } from "../apiRoute";

export const createCourse = (payload) =>
  axiosInstance.post(apiRoutes.createCourse, payload);

export const updateCourse = (payload) =>
  axiosInstance.put(apiRoutes.updateCourse, payload);
