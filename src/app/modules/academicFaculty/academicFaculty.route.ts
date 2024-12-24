import { Router } from "express";
import { validationRequest } from "../../middlewares/validationRequet";
import { AcademicFacultyValidation } from "./academicFaculty.validation";
import { AcademicFacultyController } from "./academicFaculty.controller";


const route = Router();

route.get("/", AcademicFacultyController.academicFacultyGet);
route.get("/:id", AcademicFacultyController.academicFacultyGetById);
route.post("/", validationRequest(AcademicFacultyValidation.academicFacultyValidation),AcademicFacultyController.academicFacultyCreate);
route.put("/:id", validationRequest(AcademicFacultyValidation.academicFacultyUpdateValidation),AcademicFacultyController.academicFacultyUpdate);
route.delete("/:id", AcademicFacultyController.academicFacultyDelete);


export const AcademicFacultyRoute = route;