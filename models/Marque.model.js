import mongoose from "mongoose"
var MarqueSchema = mongoose.Schema({
    nommarque: String
});
const Marque = mongoose.model('Marque', MarqueSchema);
export default Marque

