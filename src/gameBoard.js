function analiePosition(y, x, length, positionS){
    var pos = 0;
    if(length == 4){
        if(positionS == 'h'){
            if(x+length > 10){
                return false;
            }else{
                return true;
            }
        }else if(positionH == 'v'){
            if(y+length > 10){
                return false;
            }else{
                return true;
            }
        }
    }else if(length == 3){
        if(positionS == 'h'){
            if(x+length == 10){
                if(y==9 && x!=0){
                    pos = 0;
                    for(let i = y-1; i<y+1; i++){
                        for(let j = x-1; j<x+length; j++){
                            pos += board[i][j];
                            console.log(`${i}, ${j}`);
                        }
                    }
                    if(pos !=0){
                        return false;
                    }else{
                        return true;
                    } 
                }
                if(y==0 && x!=0){
                    pos = 0;
                    for(let i = y; i<=y+1; i++){
                        for(let j = x-1; j<x+length; j++){
                            pos += board[i][j];
                            console.log(`${i}, ${j}`);
                        }
                    }
                    if(pos !=0){
                        return false;
                    }else{
                        return true;
                    }
                }else if(y!=0 && x!=0){
                    pos=0;
                    for(let i = y-1; i<=y+1; i++){
                        for(let j = x-1; j<x+length; j++){
                            pos += board[i][j];
                            console.log(`${i}, ${j}`);
                        }
                    }
                    if(pos !=0){
                        return false;
                    }else{
                        return true;
                    }
                }    
            }else if(y==0 && x==0){
                pos = 0;
                for(let i = y; i<=y+2; i++){
                    for(let j = x; j<=x+length; j++){
                        pos += board[i][j];
                        console.log(`${i}, ${j}`);
                    }
                }
                if(pos !=0){
                    return false;
                }else{
                    return true;
                }
            }else if(y==0 && x!=0){
                pos = 0;
                for(let i = y; i<=y+1; i++){
                    for(let j = x-1; j<=x+length; j++){
                        pos += board[i][j];
                        console.log(`${i}, ${j}`);
                    }
                }
                if(pos !=0){
                    return false;
                }else{
                    return true;
                }
            }else if(y==9 && x==0){
                pos =0;
                for(let i = y-1; i<=y; i++){
                    for(let j = x; j<=x+length; j++){
                        pos += board[i][j];
                        console.log(`${i}, ${j}`);
                    }
                }
                if(pos !=0){
                    return false;
                }else{
                    return true;
                }
            }else if(y==9 && x!=0){
                pos =0;
                for(let i = y-1; i<=y; i++){
                    for(let j = x-1; j<=x+length; j++){
                        pos += board[i][j];
                        console.log(`${i}, ${j}`);
                    }
                }
                if(pos !=0){
                    return false;
                }else{
                    return true;
                }
            }else if(y!=0 && x==0){
                pos =0;
                for(let i = y-1; i<=y; i++){
                    for(let j = x; j<=x+length; j++){
                        pos += board[i][j];
                        console.log(`${i}, ${j}`);
                    }
                }
                if(pos !=0){
                    return false;
                }else{
                    return true;
                }
            }else if(y!=0 && x!=0){
                pos=0;
                for(let i = y-1; i<=y+1; i++){
                    for(let j = x-1; j<x+length; j++){
                        pos += board[i][j];
                        console.log(`${i}, ${j}`);
                    }
                }
                if(pos !=0){
                    return false;
                }else{
                    return true;
                }
            } 
        }else if(positionH == 'v'){
            if(y+length > 10){
                return false;
            }else{
                return true;
            }
        }
    }
}