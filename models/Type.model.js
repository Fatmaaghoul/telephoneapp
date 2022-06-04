import mongoose from "mongoose"
var typeSchema = mongoose.Schema({
type: String
})
const Type = mongoose.model('Type', typeSchema);
export default Type