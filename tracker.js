$(document).ready(function(){
    
    // Preset Displays
    
    $("#output_currentStats").hide();
    
    // Global Variables
   
    var batteTag; // Name used ingame
    var skillRating; // SR number
    var skillRank; // SR rank (Bronze, Silver, Gold)
    
    // Inital Form Submit
    
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
    
    // Skill Rank Calculation Function
    // ===============================
    // Calculates the difference between your new and old skill ratings.
    // Updates with the new rating, rank if applicable and the difference
    // between then.
    
    function calcRank(){
        
        // Create variable for new skill rating
        
        var newSkillRating = $("#input_newSkillRating").val();
        
        // Create variable that will hold the "+" or "-" sign
        
        var rankSign;
        
        // Check which sign is needed and insert that into the
        // rankSign variable.
        
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
        
        // Create convertRank variable to do the math, put the results of that variable
        // into rankDifference to change it into an absolute number (remove negative integers).
        
        var convertRank = skillRating - newSkillRating;
        
        var rankDifference = Math.abs(convertRank);
        
        // Put new result in the skillRating variable.
        
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
    
    // Initializes Skill Rank Calculation
    
    $("#submit_newSkill").click(function(){
        calcRank();
    });
    
});