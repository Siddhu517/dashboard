import ClientData from "../models/Index";

export const getData = async (req, res) => {
  try {
    const data = await ClientData.find({});
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: "network failed", error: err });
  }
};

export const getYear = async (req, res) => {
  try {
    const { endYear } = req.body;
    const data = await ClientData.find({ end_year: endYear });
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: "data not found", error: err });
  }
};

export const getTopic = async (req, res) => {
  try {
    const { topic } = req.body;
    const TopicData = await ClientData.find({
      topic: { $regex: topic, $options: "i" },
    });
    res.status(201).json(TopicData);
  } catch (err) {
    res.status(400).json({ message: "data not found", error: err });
  }
};

export const getSector = async (req, res) => {
  try {
    const { sector } = req.body;
    const data = await ClientData.find({
      sector: { $regex: sector, $options: "i" },
    });
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: "data not found", error: err });
  }
};

export const getRegion = async (req, res) => {
  try {
    const { region } = req.body;
    const data = await ClientData.find({
      region: { $regex: region, $options: "i" },
    });
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: "data not found", error: err });
  }
};

export const getPEST = async (req, res) => {
  try {
    const { pest } = req.body;
    const data = await ClientData.find({
      pestle: { $regex: pest, $options: "i" },
    });
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: "data not found", error: err });
  }
};

export const getSource = async (req, res) => {
  try {
    const { source } = req.body;
    const data = await ClientData.find({
      source: { $regex: source, $options: "i" },
    });
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: "data not found", error: err });
  }
};

export const getCountry = async (req, res) => {
  try {
    const { country } = req.body;
    const data = await ClientData.find({
      country: { $regex: country, $options: "i" },
    });
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: "data not found", error: err });
  }
};

export const getALLFilter = async (req, res) => {
  try {
    if (req.body.allFilterData) {
      const { endYear, topic, sector, region, pest, source, country } =
        req.body.allFilterData;
      // check if all properties are empty
      if (endYear || topic || sector || region || pest || source || country) {
        // apply filters
        const data = await ClientData.find({
          end_year: endYear,
          topic: { $regex: topic, $options: "i" },
          sector: { $regex: sector, $options: "i" },
          region: { $regex: region, $options: "i" },
          pestle: { $regex: pest, $options: "i" },
          source: { $regex: source, $options: "i" },
          country: { $regex: country, $options: "i" },
        });
        res.status(201).json(data);
      } else {
        // no filters specified, skip the query
        res.status(200).json([]);
      }
    } else {
      // no filters specified, skip the query
      res.status(200).json([]);
    }
  } catch (err) {
    res.status(400).json({ message: "data not found", error: err });
  }
};
