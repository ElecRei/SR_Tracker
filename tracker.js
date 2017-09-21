$(document).ready(function(){
   
    var batteTag; // Name used ingame
    var skillRating; // SR number
    var skillRank; // SR rank (Bronze, Silver, Gold)
    
    $("#submit_form").click(function(){
        
        batteTag = $("#input_battleTag").value;
        skillRating = $("input_skillRating").value;
        if(skillRating <= 1499){
            skillRank = "Bronze";
        }
        else if(skillRating >= 1500 && skillRating <= 1999){
            skillRank = "Silver";
        }
        else if(skillRating >= 2000 && skillRating <= 2499){
            skillRank = "Gold";
        }
        else if(skillRating >= 2500 && skillRating <= 2999){
            skillRank = "Platinum";
        }
        else if(skillRating >= 3000 && skillRating <= 3499){
            skillRank = "Diamond";
        }
        else if(skillRating >= 3500 && skillRating <= 3999){
            skillRank = "Master";
        }
        else if(skillRating >= 4000){
            skillRank = "Grandmaster";
        }
        else {
            alert("Error");
        }
        
    });
    
    function calcRank(){
        
        var newSkillRating = $("#newSkillRating").value;
        
        var convertRank = skillRating - newSkillRating;
        
        var rankDifference = math.abs(convertRank);
        
        skillRating = newSkillRating;
        
        $("#skillRating_Output").append(skillRating);
        
        $("#skillDifference_Output").append(skillRating);
        
        if(skillRating <= 1499){
            skillRank = "Bronze";
        }
        else if(skillRating >= 1500 && skillRating <= 1999){
            skillRank = "Silver";
        }
        else if(skillRating >= 2000 && skillRating <= 2499){
            skillRank = "Gold";
        }
        else if(skillRating >= 2500 && skillRating <= 2999){
            skillRank = "Platinum";
        }
        else if(skillRating >= 3000 && skillRating <= 3499){
            skillRank = "Diamond";
        }
        else if(skillRating >= 3500 && skillRating <= 3999){
            skillRank = "Master";
        }
        else if(skillRating >= 4000){
            skillRank = "Grandmaster";
        }
        else {
            alert("Error");
        }
        
    };
    
});