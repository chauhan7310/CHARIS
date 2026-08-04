const gifts = require("../data/gifts");
console.log(gifts);
console.log(Array.isArray(gifts));

// GET /api/recommendations
const getRecommendations = (req, res) => {
  const occasion = (req.query.occasion || "").toLowerCase();
  const relationship = (req.query.relationship || "").toLowerCase();
  const budget = Number(req.query.budget || 0);

  console.log(req.query);

  let recommendations = gifts.filter((gift) => {
    const occasionMatch =
      !occasion ||
      gift.occasion.toLowerCase().includes(occasion);

    const relationshipMatch =
      !relationship ||
      gift.relationship.toLowerCase().includes(relationship) ||
      gift.relationship === "Anyone";

    const budgetMatch =
      budget === 0 ||
      gift.price <= budget;

    return occasionMatch && relationshipMatch && budgetMatch;
  });

  // Agar exact match nahi mila
  if (recommendations.length === 0) {

    // sirf budget ke hisab se
    recommendations = gifts.filter((gift) => {
      return budget === 0 || gift.price <= budget;
    });

    // agar fir bhi kuch nahi
    if (recommendations.length === 0) {
      recommendations = gifts;
    }
  }

  res.json({
    success: true,
    total: recommendations.length,
    data: recommendations.slice(0,6),
  });
};

const getRecommendationById = (req,res)=>{

 const gift=gifts.find(
   g=>g.id===Number(req.params.id)
 );

 if(!gift){
   return res.status(404).json({
     success:false,
     message:"Gift not found"
   });
 }

 res.json({
   success:true,
   data:gift
 });
};

module.exports={
 getRecommendations,
 getRecommendationById
};