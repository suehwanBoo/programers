function solution(n)
{
   return Array.from(""+n).reduce((t,c)=>{
        t += +c
        return t
    },0);
}