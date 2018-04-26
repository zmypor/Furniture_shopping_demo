import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {Observable} from 'rxjs/Rx';
import {of} from 'rxjs/observable/of';
@Injectable()
export class ProductService {
  public getProducts(): Observable<Product[]> {
    return this.products();
  }

  public getProductByID(id: number): Observable<Product> {
    return this
      .products()
      .map(_ => _.find((item: Product) => item.id === id)
      );
  }


  public products(): Observable<Product[]> {
    return of(<Product[]> [
      <Product> {id: 0, name: '波昂单人沙发', price: 999, currency: 'RMB￥', colors: ['brown'], imageUrl: 'assets/image/波昂单人沙发.jpg',
      description: '承压面料: 100%聚丙烯纤维框架； 贴合层:弯曲木；表面:橡木贴面；着色漆:丙烯酸清漆。靠背和座填料: 聚氨酯泡沫。'},
      <Product> { id: 1, name: '波昂儿童扶手椅', price: 299, currency: 'RMB￥', colors: ['blue'], imageUrl: 'assets/image/波昂儿童扶手椅.jpg',
      description: '胶合板框架: 桦木贴面, 丙烯酸清漆；承压面料: 100%聚乙烯；沙发套: 100%棉；填料: 100%聚酯纤维；管框架: 有色环氧树脂粉涂层。'},
      <Product> { id: 2, name: '波昂红色摇椅', price: 699, currency: 'RMB￥', colors: ['red'], imageUrl: 'assets/image/波昂红色摇椅.jpg',
      description: '框架:贴合层-弯曲木，桦木贴面，丙烯酸清漆；承压面料: 100%聚丙烯纤维；扶手椅垫结构/ 边带: 100%棉； 填料：100%聚丙烯纤维。'},
      <Product>  { id: 3, name: '波昂绿色摇椅', price: 799, currency: 'RMB￥', colors: ['green'], imageUrl: 'assets/image/波昂绿色摇椅.jpg',
      description: '框架:贴合层-弯曲木，桦木贴面，丙烯酸清漆；承压面料: 100%聚丙烯纤维；扶手椅垫整体结构/ 边带: 100%棉；靠背和座填料: 聚氨酯泡沫。'},
      <Product>  { id: 4, name: '迪拉提单人沙发', price: 4499, currency: 'RMB￥', colors: ['gray'], imageUrl: 'assets/image/迪拉提单人沙发.jpg',
      description: '扶手框架: 铝制，阳极氧化；塑料件: 聚酰胺塑料, 合成橡胶；座垫: 聚氨酯泡沫30公斤/立方米；毡衬填料：聚酯纤维。'},
     <Product> { id: 5, name: '奇维贵妃椅', price: 1800, currency: 'RMB￥', colors: ['red'], imageUrl: 'assets/image/奇维贵妃椅.jpg', description:
      '座垫: 高弹聚氨酯泡沫（海绵）35公斤/立方米, 聚氨酯记忆海绵50公斤/立方米；填料：聚酯纤维；靠背垫: 10%切块聚氨酯海绵。'},
      <Product> { id: 6, name: '奇维双人沙发', price: 1999, currency: 'RMB￥', colors: ['red'], imageUrl: 'assets/image/奇维双人沙发.jpg', description:
      '扶手框架: 纤维板, 胶合板, 聚氨酯泡沫25公斤/立方米；填料：聚酯纤维；座垫: 高弹聚氨酯泡沫（海绵）35公斤/立方米。'},
      <Product>  { id: 7, name: '奇维三人沙发', price: 3799, currency: 'RMB￥', colors: ['red'], imageUrl: 'assets/image/奇维三人沙发.jpg', description:
      '扶手框架: 纤维板, 胶合板, 聚氨酯泡沫25公斤/立方米；填料：聚酯纤维；座垫: 高弹聚氨酯泡沫（海绵）35公斤/立方米。'},
      <Product>  { id: 8, name: '奇维四人沙发', price: 4899, currency: 'RMB￥', colors: ['red'], imageUrl: 'assets/image/奇维四人沙发.jpg', description:
      '扶手框架: 纤维板, 胶合板, 聚氨酯泡沫25公斤/立方米；填料：聚酯纤维；座垫: 高弹聚氨酯泡沫（海绵）35公斤/立方米。'},
      <Product>  { id: 9, name: '斯佳蒙靠背椅', price: 2499, currency: 'RMB￥', colors: ['brown'], imageUrl: 'assets/image/斯佳蒙靠背椅.jpg',
      description: '皮料: 整块染色牛皮，经粒面，压花，着色处理；框架: 实木, 胶合板, 刨花板；填料：聚酯纤维；座垫: 聚氨酯泡沫。'},
      <Product> {id: 10, name: '兰德克纳单人沙发', price: 3499, currency: 'RMB￥', colors: ['black'], imageUrl: 'assets/image/兰德克纳.jpg', description:
      '涂层布料: 75%聚酯纤维，25%棉，100%聚氨酯；靠背和座框架: 胶合板，纤维板，刨花板，实心松木；扶手框架: 胶合板, 纤维板, 刨花板。'},
      <Product> {id: 11, name: '克阿普单人沙发', price: 1149, currency: 'RMB￥', colors: ['dark-brown'], imageUrl: 'assets/image/KOARP克阿普.jpg',
      description: '填料：聚酯纤维，无纺聚丙烯纤维；靠背垫: 30% 切块聚氨酯海绵/70%聚酯纤维，无纺聚丙烯纤维；防尘罩: 无纺聚丙烯纤维；Z形弹簧。'}]);
  }
}
