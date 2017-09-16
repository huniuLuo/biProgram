<template>
 
<el-row class="top_nav">
  <el-col :span="24">
    <div class="grid-content bg-purple-dark">
       <div class="data_show">内容数据概览</div>
    
        <el-radio-group v-model="radio3" class="date">
        <el-radio-button label="日"></el-radio-button>
        <el-radio-button label="周"></el-radio-button>
        <el-radio-button label="月"></el-radio-button>       
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
    </div>
     <transition name="fade" >
      <div :class="['checkWrapper', { 'show': showClick }]">
        <div class="dataShow_systemName"> 统计的平台 ：
          <el-checkbox-group v-model="checkList" class="checkSystem">
              <el-checkbox label="ios" :checked='true'></el-checkbox>
              <el-checkbox label="Android" :checked='true'></el-checkbox>
              <el-checkbox label="Launcher(ios)" :checked='true'></el-checkbox>
              <el-checkbox label="Launcher(Android)" :checked='true'></el-checkbox>
              <el-checkbox label="H5分享页" ></el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="dataShow_obj">统计的对象: 
          <el-checkbox-group v-model="checkList" class="checkVersion" >
              <el-checkbox label="节目" :checked='true'></el-checkbox>
              <el-checkbox label="直播" :checked='true'></el-checkbox>
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
             <div class="data_table">数据报表</div>
             <el-select v-model="value" placeholder="每页10条" class="pageCount">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
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
            prop="date"
            label="最近7日"
           
            width="180">
          </el-table-column>
          <el-table-column
        
            prop="name"
            label="浏览量"
            width="180">
          </el-table-column>
          <el-table-column
            prop="province"
            label="播放量"
            width="180">
          </el-table-column>
          <el-table-column
            prop="UV"
            label="UV"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="平均播放时长"
           
            width="300">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="平均浏览次数"
        
            width="300">
          </el-table-column>
           <el-table-column
            prop="zip"
            label="分享"
            width="180">
          </el-table-column>
           <el-table-column
            prop="zip"
            label="分享人次"
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
       value3: '',
      
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,

       options: [{
          value: '选项1',
          label: '每页10条'
        }, {
          value: '选项2',
          label: '每页50条'
        },
        {
          value: '选项3',
          label: '每页200条'
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

         tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      };
    },
     methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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
      }

    }
  }
</script>
<style>
  .el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  /* .el-col {
    border-radius: 4px;
  } */
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
    /* text-align: center; */
    /* height: 5px; */
    line-height: 34px;
    padding-left: 15px;
    display: inline-block;
      /* display: block; */
      
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
/* .top_nav{
  margin-bottom: 20px;
} */
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
  /* padding-left: -30px; */
  float: right ;
  padding-right: 40px;
}
.download{
  margin-top: 27px;
}
.dataShow_systemName{
  padding: 10px 10px 7px ;
}
.dataShow_obj{
  padding: 7px 10px 10px;
} 
.dataShow_version{
  padding-left: 10px;
}
.checkIos{
  display: inline-block;
  padding-left: 10px;
  
}
.checkAndroid{
  padding-left: 10px;
  display: inline-block;
}
.checkTitle{
  padding-left: 90px;
}
.checkLauncher{
  padding-left: 10px;
  display: inline-block;
}
.checkla{
    padding-left: 90px;
}

/* .checkAndroid{
  display: block;
  padding-left: 85px;
} */
</style>
