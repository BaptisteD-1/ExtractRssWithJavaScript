newAjax = new XMLHttpRequest();
    newAjax.onreadystatechange = () => {
        if(newAjax.readyState == 4){
            if(newAjax.status == 200){
                let ajaxResponse = newAjax.responseText;
                let parser = new DOMParser();
                let xmlObj = parser.parseFromString(ajaxResponse,"text/xml");
                let resultat = document.evaluate("/rss/channel/item",xmlObj,null,XPathResult.ANY_TYPE,null);
                let loopResultat = resultat.iterateNext();
                console.log(loopResultat);
                //Looping through each result of the 'resultat' variable
                while(loopResultat){
                    //Showing raw string result out of the 'item' node in the rss file
                    console.log(loopResultat.textContent);
                    //Here is how to extract a certain data out of the loop result
                    console.log(loopResultat.getElementsByTagName("title")[0].textContent);
                    //each time we do something in the loop result, we then skip to the next iterated loop result
                    loopResultat = resultat.iterateNext();
                    i ++;
                }
            }
        }
    }
newAjax.open("GET", "yourRssLink.rss", true);
newAjax.send(null);
