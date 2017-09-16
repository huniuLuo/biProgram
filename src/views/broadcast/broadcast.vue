<template>

<el-row class="top_nav">
  <el-col :span="24">
    <div class="grid-content bg-purple-dark">
       <div class="data_show">内容数据概览</div>
    
        <el-radio-group v-model="radio3" class="date">
        <el-radio-button label="日"></el-radio-button>
        <el-radio-button label="周"></el-radio-button>
        <el-radio-button label="季"></el-radio-button>       
        </el-radio-group>

         <div class="block">
          <span class="demonstration">自定义</span>
          <el-date-picker
            v-model="value3"
            type="datetimerange"
            placeholder="选择时间范围">
          </el-date-picker>
        </div>
        <div class="check" >
          <div @click = "showClick = !showClick">
            筛选 <i class=" fa fa-caret-down" style=" margin-left: 10px;"  ></i>
          </div>
        </div>
          <!-- <div class="check" >筛选 <i class=" fa fa-caret-down" style=" margin-left: 10px;" @click = 'showClick()'  ></i>
         v-show="isShow"
        </div> -->
    </div>
    <transition name="fade" >
      <div :class="['checkWrapper', { 'show': showClick }]">
        <div class="systemName"> 统计的平台 ：
          <el-checkbox-group v-model="checkList" class="checkSystem">
              <el-checkbox label="ios" :checked='true'></el-checkbox>
              <el-checkbox label="Android" :checked='true'></el-checkbox>
              <el-checkbox label="Launcher(ios)" :checked='true'></el-checkbox>
              <el-checkbox label="Launcher(Android)" :checked='true'></el-checkbox>
              <el-checkbox label="H5分享页" ></el-checkbox>
          </el-checkbox-group>
        </div>
       <div class="dataShow_version">统计的版本:
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll_ios" @change="handleCheckAll_iosChange" class="checkliner">Ios 全选</el-checkbox>
          <el-checkbox-group v-model="checkedIos" @change="handleCheckedIosChange" class="checkIos" >
            <el-checkbox v-for="city in cities_ios" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
          <!-- <br> -->
          <div> 
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" class="checkTitle">Android 全选</el-checkbox>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" class="checkAndroid">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
            </div>
         
          <div> 
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll_launcher" @change="handleCheckAll_launcherchange" class="checkla">Launcher 全选</el-checkbox>
          <el-checkbox-group v-model="checkedLauncher" @change="handleCheckedLauncherChange" class="checkLauncher">
            <el-checkbox v-for="city in cities_launcher" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
          </div>
        </div>
        <el-button type="primary" class="sendButton" @click="showClick=false">筛选</el-button>
      </div>
  </transition>
      <el-row class="table_nav">
         <el-col :span="24">
           <div class="grid-content bg-purple-dark">
             <!-- <div class="data_table">数据报表</div> -->
              <el-input class="brodcastName"
                placeholder="直播名称/Code"
                icon="search"
                v-model="input2"
                :on-icon-click="handleIconClick">
              </el-input>
            <!-- 节目分类 -->
               <el-select v-model="value4" clearable placeholder="查询节目分类">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
            </el-select>
            <!-- 视频格式 -->
                <el-select v-model="value" clearable placeholder="查询视频格式">
                  <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
            </el-select>
            <!-- 查询按钮 -->
            <el-button type="primary" icon="search">查询</el-button>
           </div>
           </el-col>
       </el-row>
        <el-table
          :data="tableData3"
          border
          style="width: 100%"
          height="250">
          <el-table-column
            fixed
            prop="videoName"
            label="直播名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="videoSid"
            label="Code"
             fixed
            width="180">
          </el-table-column>
          <el-table-column
            prop="style"
            label="类型"
             fixed
            width="100">
          </el-table-column>
          <el-table-column
            prop="browse_viewCount"
            label="浏览量"
            sortable
            width="150">
          </el-table-column>
          <el-table-column
            prop="play_viewCount"
            label="播放量"
            sortable
            width="150">
          </el-table-column>
          <el-table-column
            prop="browse_userCount"
            label="UV"
            sortable
            width="150">
          </el-table-column>
           <el-table-column
            prop="average_duration"
            label="平均播放时长"
            sortable
            width="180">
          </el-table-column>
           <el-table-column
            prop="avgCount"
            label="平均浏览次数"
            sortable
            width="180">
          </el-table-column>
            <el-table-column
            prop="average_playCount"
            label="平均播放次数"
            sortable
            width="180">
          </el-table-column>
            <el-table-column
            prop="avgin_out"
            label="平均进出次数"
            sortable
            width="180">
          </el-table-column>
            <el-table-column
            prop="preCount"
            label="预约量"
            sortable
            width="180">
          </el-table-column>
            <el-table-column
            prop="share"
            label="分享"
            sortable
            width="180">
          </el-table-column>
            <el-table-column
            prop="sharePelope"
            label="分享人次"
            sortable
            width="180">
          </el-table-column>
            <el-table-column
            prop="barrageCount"
            label="弹幕量"
            sortable
            width="180">
          </el-table-column>
            <el-table-column
            prop="barragePeoCount"
            label="弹幕人次"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="avgBarragePeoCount"
            label="平均弹幕次数"
            sortable
            width="180">
          </el-table-column>
            <el-table-column
            prop="giftCount"
            label="送礼量"
            sortable
            width="180">
          </el-table-column>
            <el-table-column
            prop="giftCount"
            label="送礼人次"
            sortable
            width="180">
          </el-table-column>
            <el-table-column
            prop="avgGiftCount"
            label="平均送礼次数"
            sortable
            width="180">
          </el-table-column>
            <el-table-column
            prop="payUser"
            label="付费用户"
            sortable
            width="180">
          </el-table-column>
            <el-table-column
            prop="payUserRate"
            label="付费率"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="buyCount"
            label="购买订单数"
            sortable
            width="180">
          </el-table-column>
           <el-table-column
            prop=" exchange"
            label="兑换数"
            sortable
            width="180">
          </el-table-column>
          
        </el-table>
        <!-- download button  -->
         <el-button type="primary" class="download"><i class=" fa fa-cloud-download"></i> 下载数据明细</el-button> 
        <!-- Example of cloud-download -->
        <!-- 分页器 -->
         <div class="block_page">
            <!-- <span class="demonstration">直接前往</span> -->
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage3"
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="1000">
            </el-pagination>
        </div>
    </el-col>
</el-row>
 
</template>
<script>
import Api from '../api/api.js'
const cityOptions = ['3.1.5', '3.1.4','3.1.3','3.1.2','3.1.0', '3.0.0','2.9.0','2.8.0','2.7.0', '2.6.0','2.5.0','2.4.0'];//android 
const cityOptions_ios = ['3.1.5', '3.1.4','3.1.3','3.1.2','3.1.0', '3.0.0','2.9.0','2.8.0','2.7.0', '2.6.0','2.5.0','2.4.0'];
const cityOptions_launcher = ['3.1.5', '3.1.4','3.1.3','3.1.2'];

export default {
  //  el:'.check',
   data() {
      return {
        radio3: '日',
        radio4: '周',
        radio5: '月',

        // checkbox
        showClick: false,
      
        // checked
        checkList :[],
      //  分页器
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        //input输入搜索框
        input2: '',
       //时间检索框
   
        value3: '',
      
        options: [{
          value: '选项1',
          label: '美女'
        }],
        value4: '',
        // 视频格式
         options2: [{
          value: '选项1',
          label: 'VR'
        }, {
          value: '选项2',
          label: '360 3D'
        },{
           value: '选项3',
          label: 'Live'
        }],
        value: '',

         //全选 
        checkAll: true,
        checkAll_ios: true,
        checkAll_launcher: true,
        checkedCities: ['3.1.5', '3.1.4','3.1.3','3.1.2','3.1.0', '3.0.0','2.9.0','2.8.0','2.7.0', '2.6.0','2.5.0','2.4.0'],
        checkedIos: ['3.1.5', '3.1.4','3.1.3','3.1.2','3.1.0', '3.0.0','2.9.0','2.8.0','2.7.0', '2.6.0','2.5.0','2.4.0'],
        checkedLauncher: ['3.1.5', '3.1.4','3.1.3','3.1.2','3.1.0', '3.0.0','2.9.0'],
        cities: cityOptions,
        cities_ios: cityOptions_ios,
        cities_launcher: cityOptions_launcher,
        isIndeterminate: true ,
        // 获取表格数据
         tableData3: [
        ]
      };
    },
    mounted() {
      this.getDataList();

    },
    methods: {

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleIconClick(ev) {
        console.log(ev);
      },

       handleCheckAllChange(event) {
        this.checkedCities = event.target.checked ? cityOptions : [];
      
        this.isIndeterminate = false;
      },
      handleCheckAll_iosChange(event) {
        this.checkedIos = event.target.checked ? cityOptions_ios : [];
        this.isIndeterminate = false;
      },
       handleCheckAll_launcherchange(event) {
        this.checkedLauncher = event.target.checked ? cityOptions_launcher : [];
        this.isIndeterminate = false;
      },

      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      handleCheckedIosChange(value) {
        let checkedCount = value.length;
        this.checkAll_ios = checkedCount === this.cities_ios.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities_ios.length;
      },
       handleCheckedLauncherChange(value) {
        let checkedCount = value.length;
        // this.checkAll = checkedCount === this.cities_ios.length;
        this.checkAll_launcher = checkedCount === this.cities_launcher.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities_launcher.length;
      },
      getDataList(){
        var _this = this ;

        const  startDate= 1504368000;
        const  endDate= 1504368000;
        const  systemName ='IOS';
        const apkVersion='3.1.3';

      

        Api.getProgram( startDate, endDate ,systemName, apkVersion).then( (resp) => {
           //  console.log(JSON.stringify(resp))
          // var respList=JSON.stringify(resp);
          //  const  _rspData = function (resp){ return resp.data}
         
           console.log(resp);
          // console.log(respList);
          // console.log(resp.videoSid);
          // console.log(resp.data.result.data[0].videoName);

        _this.tableData3 = resp.data.result.data ;

        });
      }
    }
  }
</script>
<style>
  .el-row {
    margin-bottom: 20px;

  }

  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    /* border-radius: 4px; */
    min-height: 36px;
  
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .data_show{
   color: #ffffff;
   
    line-height: 34px;
    padding-left: 15px;
    display: inline-block;
      
  }
  .date{
     margin-left: 50px;
     display: inline-block;
  }
.demonstration{
  color: #ffffff;
   
}
.block{
display: inline-block;
padding-left: 80px;
}

.table_nav{
  margin-top: 30px;

}
.data_table{
  color: #ffffff;
  line-height: 34px;
  padding-left: 15px;
  display: inline-block;
}
.pageCount{
  float: right;
  padding-right: 20px;
}

.block_page{

  float: right ;
  padding-right: 40px;
     margin-top: 27px;
}
.download{
  margin-top: 27px;
}
.brodcastName{
  width: 200px;
  padding-left: 10px;
}
.check{
  float: right;
  margin-top: 10px;
  margin-right: 50px;
  color: #ffffff;

}
.fade-enter-active, .fade-leave-active {
  transition: all .5s
}
.fade-enter, .fade-leave /* .fade-leave-active 在低于版本 2.1.8 中 */ {
  opacity: 0;
  width: 0;
  height: 0;
}
.checkWrapper {
  width: 100%;
  height: 0;
  opacity: 0;
   transition: all .5s
}
.checkWrapper.show{
  width: 100%;
  height: 100px;
  opacity: 1;
   opacity: 0.3;
  background-color:#99a9bf;
   transition: all .5s
}
.systemName{
  color: #ffffff;

  padding: 20px 10px 20px ;
  margin: auto;
  

}
.version{
  color: #ffffff;
  padding-left: 10px ;
}
.checkSystem{
  display: inline-block;
}
.checkVersion{
   display: inline-block;
}
.sendButton{
  float: right;
  margin-top: -20px;
  margin-right: 20px;
}
/* .el-picker-panel__btn{
  color: pink;
} */
/* .data_table{
  display: inline-block;
} */
/* .brodcastName{
  display: inline-block;
} */
</style>
