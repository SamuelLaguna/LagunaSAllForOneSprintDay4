


//Peer Review: Elizar Garcia, Code workds great! i put my name in the url and the code is generated in postman with no problem. Everything look good. Great job!!

using Microsoft.AspNetCore.Mvc;

namespace LagunaSMiniCH_1API.Controllers;

[ApiController]
[Route("[controller]")]
public class AllMiniChController : ControllerBase
{
    [HttpGet]
    [Route("Hello/{name}")]
        public string Sayhello(string name)
    {
        return $"Hello my name is {name} ";
    }

    [HttpGet]
    [Route("Adding/{num1}/{num2}")]
   
    public string Math(string num1, string num2)
    {
        int number1 = 0;
        int number2 = 0;
        bool check1 = Int32.TryParse(num1, out number1);
        bool check2 = Int32.TryParse(num2, out number2);
        string non = "";
        if(check1 == false || check2 == false){
            non = "Error";
        }else{
            non = $"{number1 + number2}";
        }
    return non;
    }

    [HttpGet]
    [Route("Question/{Q1}/{Q2}")]
    public string Asking(string Q1, string Q2)
    {
        return $"My name is {Q1}, I woke up at {Q2}";
    }  


    [HttpGet]
        [Route("GreaterLess/{number1}/{number2}")]
        public string Greater(string number1, string number2)
        {
            int num1 = 0;
            int num2 = 0;
            bool verify = Int32.TryParse(number1, out num1);
            bool verify2 = Int32.TryParse(number2, out num2);
            string result = "";
            
            if(num1 > num2)
            {
                result = $"{num1} is greater than {num2} \n{num2} is less than {num1}";  
            }
            else if(num1 < num2)
            {
                result = $"{num2} is greater than {num1} \n {num1} is less than {num2}";
            }
            else if(num1 == num2)
            {
                result = $"{num1} is equal to {num2}";
            }
            return result;
        }

         [HttpGet]
        [Route("MadLib/{n1}/{n2}/{n3}/{n4}/{adj1}/{adj2}/{v1}/{v2}/{lw}/{rw}")]
    public string Tale(string n1, string n2, string n3, string n4, string adj1, string adj2, string v1, string v2, string lw, string rw)
    {
       string line1 = " I know it, \" returned the " + n1 + "  a " + v2 + " tear ran from his eye with the tip";
      string line2 = " of his " + n2 + " \"it is my great" + rw + ", and makes my life very happy.\" But whenever there is";
      string line3 =  " my " + n3 + " begins to" + adj1 + " fast. The " + n4 + " then turned around and " + adj2 + " the perpatrator, then he " + v1 + " his body to a" + lw;
      
        return $"{line1}{line2}{line3}";
    }




        [HttpGet]
    [Route("OddorEven/{num}")]
    public string OoE(int num){
      string result = "";

    if(num % 2 == 0)
    {
       result = num + " is even";
    }
    else
    {
       result = num + "is odd";
    }
    return result;
 }

    [HttpGet]
  [Route("Reverse/{chain}")]
    public string back(string chain)
    {
       char[] cArray = chain.ToCharArray();
    string reverse = String.Empty;
    for (int i = cArray.Length - 1; i > -1; i--)
    {
        reverse += cArray[i];
    }
    return reverse;
    }




}