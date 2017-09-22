$(document).ready(function(){
    
    $("#output_currentStats").hide();
   
    var batteTag; // Name used ingame
    var skillRating; // SR number
    var skillRank; // SR rank (Bronze, Silver, Gold)
    
    $("#submit_form").click(function(){
        
        batteTag = $("#input_battleTag").val();
        skillRating = $("#input_skillRating").val();
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
        
        $("#cs_battleTag").append(batteTag);
        $("#cs_skillRating").append(skillRating);
        $("#cs_skillRank").append(skillRank);
        
        
        $("#form_entry").hide();
        $("#output_currentStats").show();
        
    });
    
    function calcRank(){
        
        console.log(skillRating);
        
        var newSkillRating = $("#input_newSkillRating").val();
        
        var rankSign;
        
        if(parseInt(newSkillRating) > parseInt(skillRating)){
            console.log(newSkillRating + "/" + skillRating);
            rankSign = "+";
        }
        else if(parseInt(newSkillRating) < parseInt(skillRating)){
            console.log(newSkillRating + "/" + skillRating);
            rankSign = "-";
        }
        else {
            rankSign = "";
        }
        
        console.log(newSkillRating);
        
        var convertRank = skillRating - newSkillRating;
        
        var rankDifference = Math.abs(convertRank);
        
        skillRating = newSkillRating;
        
        $("#cs_skillRating").html(skillRating);
        
        console.log(skillRating);
        
        $("#skillDifference_Output").html(rankSign + rankDifference);
        
        if(document.getElementById('skillDifference_Output').innerHTML.indexOf("-")){
            $("#skillDifference_Output").css("color","green");
        }
        else if(document.getElementById('skillDifference_Output').innerHTML.indexOf("+")){
            $("#skillDifference_Output").css("color","red");
        }
        else {
            $("#skillDifference_Output").css("color","black");
        }
        
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
        
        console.log(skillRank);
        
        $("#cs_skillRank").html(skillRank);
    };
    
    $("#submit_newSkill").click(function(){
        calcRank();
    });
    
});