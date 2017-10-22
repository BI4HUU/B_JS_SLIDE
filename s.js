
        var body = `{ count: 57,
  items: 
   [ { id: 35591927, first_name: 'Олег', last_name: 'Снадин' },
     { id: 365422246, first_name: 'Anna', last_name: 'Korolkova' },
     { id: 337141766, first_name: 'Настя', last_name: 'Филлипова' },
     { id: 154289652, first_name: 'Женя', last_name: 'Лысенко' },
     { id: 156339146, first_name: 'Ирочка', last_name: 'Коваль' },
     { id: 13640765, first_name: 'Евгений', last_name: 'Кузьмин' },
     { id: 74572602, first_name: 'Иван', last_name: 'Сидоренко' },
     { id: 185428162, first_name: 'Валерия', last_name: 'Волкова' },
     { id: 328472179, first_name: 'Аліна', last_name: 'Полуніна' },
     { id: 202711805, first_name: 'Лесюня', last_name: 'Демянова' },
     { id: 31776062, first_name: 'Юрий', last_name: 'Калачанов' },
     { id: 95007629, first_name: 'Валентин', last_name: 'Сосидка' },
     { id: 31578369, first_name: 'Римма', last_name: 'Зверева' },
     { id: 240703535, first_name: 'Надежда', last_name: 'Дробная' },
     { id: 28305343, first_name: 'Артур', last_name: 'Сокиринский' },
     { id: 74766129, first_name: 'Юля', last_name: 'Устименко' },
     { id: 192867430, first_name: 'Макс', last_name: 'Полунин' },
     { id: 115586534, first_name: 'Стасян', last_name: 'Патинка' },
     { id: 57292026, first_name: 'Diana', last_name: 'Kordyukova' },
     { id: 214054969, first_name: 'Ирис', last_name: 'Ромашкина' },
     { id: 109409265, first_name: 'Mari', last_name: 'Balya' },
     { id: 137562196, first_name: 'Лина', last_name: 'Марич' },
     { id: 138652313, first_name: 'Сергей', last_name: 'Баран' },
     { id: 135185775, first_name: 'Николай', last_name: 'Крутоголов' },
     { id: 66788865, first_name: 'Роман', last_name: 'Калинин' },
     { id: 217177379, first_name: 'Алина', last_name: 'Полунина' },
     { id: 172861213, first_name: 'Ваня', last_name: 'Шинкарев' },
     { id: 147949112, first_name: 'Вікторія', last_name: 'Калініна' },
     { id: 265786992, first_name: 'Туз', last_name: 'Ддту' },
     { id: 187182857, first_name: 'Татьяна', last_name: 'Байдуж' },
     { id: 134403051, first_name: 'Анюта', last_name: 'Разенкова' },
     { id: 205151038, first_name: 'Юлія', last_name: 'Збарживецька' },
     { id: 18214609, first_name: 'Valerka', last_name: 'Kind' },
     { id: 27337696, first_name: 'Никита', last_name: 'Котляров' },
     { id: 114719844, first_name: 'Богдан', last_name: 'Задорожний' },
     { id: 315535532,
       first_name: 'Яна',
       last_name: 'Борщенко',
       deactivated: 'deleted' },
     { id: 74475371, first_name: 'Льоля', last_name: 'Стемблер' },
     { id: 78371439, first_name: 'Мар\'ян', last_name: 'Тимінський' },
     { id: 360567853, first_name: 'Алінуська', last_name: 'Телешова' },
     { id: 194062359, first_name: 'Петро', last_name: 'Баран' },
     { id: 253859138,
       first_name: 'Дмитрий',
       last_name: 'Геннадьевич' },
     { id: 147047564, first_name: 'Виталина', last_name: 'Лисенко' },
     { id: 47236634, first_name: 'Євгеній', last_name: 'Шевченко' },
     { id: 34235246, first_name: 'Вовчик', last_name: 'Супрун' },
     { id: 53677805, first_name: 'Вова', last_name: 'Дужий' },
     { id: 64894847, first_name: 'Сергей', last_name: 'Письменный' },
     { id: 65200711, first_name: 'Влад', last_name: 'Височин' },
     { id: 89821564, first_name: 'Євгеній', last_name: 'Синчак' },
     { id: 90392887, first_name: 'Алексей', last_name: 'Дудник' },
     { id: 98033225, first_name: 'Алексей', last_name: 'Бирюков' },
     { id: 140677343, first_name: 'Серий', last_name: 'Бойко' },
     { id: 140931841, first_name: 'Дмитрий', last_name: 'Киришун' },
     { id: 145856299, first_name: 'Максим', last_name: 'Перепёлкин' },
     { id: 152227626, first_name: 'Толян', last_name: 'Дробный' },
     { id: 153722164, first_name: 'Снежана', last_name: 'Сухопарова' },
     { id: 228733197, first_name: 'Євген', last_name: 'Семченко' },
     { id: 237359543, first_name: 'Виталий', last_name: 'Чеберяк' } ] }`
        var start = body.indexOf(`[`);
        var e = body.indexOf(`]`, start+1);
        var end = e - start;
        var str2 = body.substr(start+1,end-1);
        str2 = str2.replace(/\s/g, '');
        str2 = str2.replace(/\,/g, "");
        var varns = 0;
        var array = [];
        var subArray = [];
        
         for (var i = 0; i < 57; i++) {
         	var start2 = str2.indexOf(`{`);
         		start2 =+ varns;
        	var e2 = str2.indexOf(`}`, start2)+1;
         		varns =+ e2;
        	var end2 = e2-1 - start2;
        	var str22 = str2.substr(start2+1,end2-1);
        	subArray = [];
        	var start3 = str22.indexOf(`id:`)+2;
        	var e3 = str22.indexOf(`first_name:`, start3);
        	var end3 = e3 - start3;
        	var strId = str22.substr(start3+1,end3-1);
        		//console.log( strId );
        		subArray.push(`${strId}`)
        	var start32 = str22.indexOf(`first_name:`)+10;
        	var e32 = str22.indexOf(`last_name:`, start32);
        	var end32 = e32 - start32;
        	var strFirst = str22.substr(start32+1,end32-1); 	
        		// console.log( strFirst );	
        		subArray.push(`${strFirst}`)
        
        	var start33 = str22.indexOf(`last_name:`)+9;
        	var strLast = str22.substr(start33+1); 	
            // console.log( strLast );  
        		subArray.push(`${strLast}`)
        	array.push(subArray)
        
         }
        
             console.log( array );  
        
        