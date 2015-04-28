var triangle = {
    isEquilateral : function(a,b,c) {
    	    if(a!=b) return false ;
    	    if(b!=c) return false ;
    		return true ;
    },
    isIsosceles : function(a,b,c) {
           if(a<=0) return false;
           if(b<=0) return false;
           if(c<=0) return false;
           if(a=b) return true;
           if(b=c) return true;
           if(a=c) return ture;
           return false;
    },
    isScalene : function(a,b,c){
           if(a+b>c&&a+c>b&&b+c>a) return true;
           return false;
           
          },
};