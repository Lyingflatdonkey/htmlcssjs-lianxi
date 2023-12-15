
        let btn = document.getElementById("btn")
        let bofan = false
        btn.onclick = function(){
            bofan = !bofan
            if(bofan){
                document.getElementById("myMusic").play()
                document.querySelector(".play").classList.toggle('otate')
                btn.innerText="暂停"
            }else{
                document.getElementById("myMusic").pause()
                document.querySelector(".play").classList.toggle('otate')
                btn.innerText="播放"
            }
        }
        let lrcArr =document.getElementById("lrc").value.split('[')
        let html = ''
        for(let i=0;i<lrcArr.length;i++){
            let arr = lrcArr[i].split(']');

            let time = (arr[0].split('.')[0].split(':')[0]*60) + (arr[0].split('.')[0].split(':')[1]*1)
            // console.log(time);
            if(arr[1]){
                // html +="<p id='"+time+"'>"+arr[1]+'</p>';
                html +=`<p id='${time}'>${arr[1]}</p>`
            }
        }
        document.getElementsByClassName('content')[0].innerHTML = html

        //监听音乐播放器的播放进度实现歌词同步
        let p = document.querySelectorAll('.lrc p')//获取所有的p标签
        let mut = 0
        document.getElementById("myMusic").addEventListener('timeupdate',function(){
            if(document.getElementById(parseInt(this.currentTime))){
                [...p].forEach(item=>item.classList.remove('regtxt'))//把所有的p标签去除掉regtxt类
                document.getElementById(parseInt(this.currentTime)).classList.add('regtxt')
                if(document.querySelectorAll('.lrc p')[mut].id == parseInt(this.currentTime)){
                    document.getElementsByClassName('content')[0].style.top = 80 - 20 * mut +'px'
                    mut++
                }
            }

        });
        document.getElementById("myMusic").addEventListener("ended",function(){
            document.querySelector(".play").classList.toggle('otate')
            document.getElementsByClassName('content')[0].style.top = 100 + 'px'
            this.currentTime = 0;
        })
        //canvas
        const audioEle = document.getElementById("myMusic");
        const cvs = document.querySelector('canvas')
        const ctx = cvs.getContext('2d');
        //canvas绘画函数
        function draw(datas){
            ctx.save()
            ctx.clearRect(0,0,200,200)
            ctx.translate(100,100)//移动坐标轴圆点
            ctx.rotate(-Math.PI / 2)
            ctx.strokeStyle = "rgb(51, 145, 252)"
            ctx.lineWidth=1
            for(let i = 0;i < 128;i++){
                ctx.beginPath();
                ctx.rotate(Math.PI / 64);
                ctx.moveTo(65,0)
                ctx.lineTo(66+(datas[i*2]/7),0);//65+(datas[i]/8)
                ctx.stroke();
            }
            ctx.restore()
        }
        let isInit = false;
        let analyser,buffer
        audioEle.onplay = function(){
            if(isInit){
                return
            }
            //创建音频上下文
            const audioCtx = new AudioContext();
            //通过音频上下文创建创建音频节点
            analyser = audioCtx.createAnalyser();
            analyser.fftSize = 512
            buffer = new Uint8Array(analyser.frequencyBinCount)//analyser.frequencyBinCount
            //音频来源
            const source = audioCtx.createMediaElementSource(audioEle)
            source.connect(analyser);

            analyser.connect(audioCtx.destination)
            //初始化完成
            isInit = true
        }
        function update(){
            requestAnimationFrame(update);
            if(!isInit){
                return;
            }
            analyser.getByteFrequencyData(buffer)
            const offset = Math.floor((buffer.length * 2) / 4)
            const datas = new Array(offset * 2)
            for(let i = 0;i < offset;i++){
                datas[i] = datas[datas.length - i - 1] = buffer[i]
                
            }
            // console.log(datas);
            draw(datas)
        }
        update();