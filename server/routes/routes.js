import express from "express";
import {
  getData,
  getYear,
  getTopic,
  getSector,
  getRegion,
  getPEST,
  getSource,
  getCountry,
  getALLFilter,
} from "../controllers/index";

const router = express.Router();

//all data
router.get("/all", getData);

//endYear
router.post("/year", getYear);

//topic
router.post("/topic", getTopic);

//sector
router.post("/sector", getSector);

//region
router.post("/region", getRegion);

//PEST
router.post("/pest", getPEST);

//source
router.post("/source", getSource);

//country
router.post("/country", getCountry);

//all filter data
router.post("/allfilter", getALLFilter);

export default router;
