var date_string_list = ["8/28/2016",
                "9/4/2016",
                "9/11/2016",
                "9/18/2016",
                "9/25/2016",
                "10/2/2016",
                "10/9/2016",
                "10/16/2016",
                "10/23/2016",
                "10/30/2016",
                "11/6/2016",
                "11/13/2016",
                "11/20/2016",
                "11/27/2016",
                "12/4/2016",
                "12/11/2016",
                "12/18/2016",
                "12/25/2016",
                "1/1/2017",
                "1/8/2017",
                "1/15/2017",
                "1/22/2017",
                "1/29/2017",
                "2/5/2017",
                "2/12/2017",
                "2/19/2017",
                "2/26/2017",
                "3/5/2017",
                "3/12/2017",
                "3/19/2017",
                "3/26/2017",
                "4/2/2017",
                "4/9/2017",
                "4/16/2017",
                "4/23/2017",
                "4/30/2017",
                "5/7/2017",
                "5/14/2017",
                "5/21/2017",
                "5/28/2017",
                "6/4/2017",
                "6/11/2017",
                "6/18/2017",
                "6/25/2017",
                "7/2/2017",
                "7/9/2017",
                "7/16/2017",
                "7/23/2017",
                "7/30/2017",
                "8/6/2017",
                "8/13/2017",
                "8/20/2017",
                "8/27/2017",
                "9/3/2017",
                "9/10/2017",
                "9/17/2017",
                "9/24/2017",
                "10/1/2017",
                "10/8/2017",
                "10/15/2017",
                "10/22/2017",
                "10/29/2017",
                "11/5/2017",
                "11/12/2017",
                "11/19/2017",
                "11/26/2017",
                "12/3/2017",
                "12/10/2017",
                "12/17/2017",
                "12/24/2017"];

var date_list = [];
for(i in date_string_list){
    date = new Date(date_string_list[i]);
    date_list.push(date);
}

var DATE_BUFFER = 29;