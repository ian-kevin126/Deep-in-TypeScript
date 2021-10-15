import ArrayList from './ArrayList';
// 通用分页类
// 分页类

interface ReturnPagerData<T> {
  pageSize: number;
  pageCount: number;
  total: number;
  data: T[];
}

export default class Pager<T extends object> {
  firstRecordNoCurPage!: number; // 每一页的第一条记录号是多少
  pageSize: number = 5; // 每页多少条数据
  pageCount: number = 0; // 当前是第几页
  dataList!: ArrayList<T>; // 封装数据表取出来的全部数据的集合类

  constructor(pageCount: number) {
    this.pageCount = pageCount;
  }

  // 显示当前页的数据
  showCurrentPageData(): ReturnPagerData<T> {
    // pageCount * pageSize | this.pageSize

    this.firstRecordNoCurPage = this.pageSize * (this.pageCount - 1);

    // if (this.firstRecordNoCurPage < 0) {
    //   return {
    //     pageSize: this.pageSize,
    //     pageCount: this.pageCount,
    //     data: []
    //   };
    // }

    return {
      pageSize: this.pageSize,
      pageCount: this.pageCount,
      total: this.dataList.size(),
      data: this.dataList.element.slice(
        this.firstRecordNoCurPage,
        this.firstRecordNoCurPage + this.pageSize
      )
    };
  }
}
