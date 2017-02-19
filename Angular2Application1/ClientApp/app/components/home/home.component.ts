import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home.component.html'),
    styles: [require('./home.component.css')],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
    public value1: Date = new Date();
    public model: any = { date: undefined };

    public opened: boolean = true;

    // buttons
    onButtonClick() {
        console.log('click');
    }

    // dialog
    public close(status) {
        console.log(`Dialog result: ${status}`);
        this.opened = false;
    }

    public open() {
        this.opened = true;
    }

    // drop downs
    public listItems: Array<string> = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];

    public value = ['Basketball', 'Cricket']

    public value3: string = "359884123321";
    public mask: string = "(999) 000-000";

    // pop up
    private toggleText: string = "Show";
    private show: boolean = false;

    public onToggle(): void {
        this.show = !this.show;
        this.toggleText = this.show ? "Hid?" : "Show";
    }

    // inputs
    public sliderValue: number = 5;
    public numericValue: number = 5;
    public min: number = 0;
    public max: number = 10;
    public smallStep: number = 1;

    //LAYOUTS

    private baseImageUrl: string = "http://demos.telerik.com/kendo-ui/content/web/panelbar/";

    private imageUrl(imageName: string): string {
        return this.baseImageUrl + imageName + ".jpg";
    }

    //upload

    uploadSaveUrl: string = "saveUrl";
    uploadRemoveUrl: string = "removeUrl";

    // sortable

    public palettes: any = this.palettes = {
        "TeamA": ['Peter Franken', 'Simon Crowther', 'Catherine Dewey'],
        "TeamB": ['Lino Rodriguez', 'Paolo Accorti']
    };

    // charts
    private series: any[] = [{
        name: "India",
        data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
    }, {
        name: "Russian Federation",
        data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
    }, {
        name: "Germany",
        data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995]
    }, {
        name: "World",
        data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
    }];
    private categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];

    //  grid

    public products: any[] = [{
            "ProductID": 1,
            "ProductName": "Chai",
            "SupplierID": 1,
            "CategoryID": 1,
            "QuantityPerUnit": "10 boxes x 20 bags",
            "UnitPrice": 18.0000,
            "UnitsInStock": 39,
            "UnitsOnOrder": 0,
            "ReorderLevel": 10,
            "Discontinued": false,
            "Category": {
                "CategoryID": 1,
                "CategoryName": "Beverages",
                "Description": "Soft drinks, coffees, teas, beers, and ales"
            }
        }, {
            "ProductID": 2,
            "ProductName": "Chang",
            "SupplierID": 1,
            "CategoryID": 1,
            "QuantityPerUnit": "24 - 12 oz bottles",
            "UnitPrice": 19.0000,
            "UnitsInStock": 17,
            "UnitsOnOrder": 40,
            "ReorderLevel": 25,
            "Discontinued": false,
            "Category": {
                "CategoryID": 1,
                "CategoryName": "Beverages",
                "Description": "Soft drinks, coffees, teas, beers, and ales"
            }
        }, {
            "ProductID": 3,
            "ProductName": "Aniseed Syrup",
            "SupplierID": 1,
            "CategoryID": 2,
            "QuantityPerUnit": "12 - 550 ml bottles",
            "UnitPrice": 10.0000,
            "UnitsInStock": 13,
            "UnitsOnOrder": 70,
            "ReorderLevel": 25,
            "Discontinued": false,
            "Category": {
                "CategoryID": 2,
                "CategoryName": "Condiments",
                "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
            }
        }, {
            "ProductID": 4,
            "ProductName": "Chef Anton's Cajun Seasoning",
            "SupplierID": 2,
            "CategoryID": 2,
            "QuantityPerUnit": "48 - 6 oz jars",
            "UnitPrice": 22.0000,
            "UnitsInStock": 53,
            "UnitsOnOrder": 0,
            "ReorderLevel": 0,
            "Discontinued": false,
            "Category": {
                "CategoryID": 2,
                "CategoryName": "Condiments",
                "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
            }
        }
    ];
    private gridData: any[] = this.products;

    // split buttons
    public data1: Array<any> = [{
        text: 'Keep Text Only',
        icon: 'paste-plain-text',
        click: () => { console.log('Keep Text Only'); }
    }, {
        text: 'Paste as HTML',
        icon: 'paste-as-html',
        click: () => { console.log('Paste as HTML'); }
    }, {
        text: 'Paste Markdown',
        icon: 'paste-markdown',
        click: () => { console.log('Paste Markdown'); }
    }, {
        text: 'Set Default Paste',
        click: () => { console.log('Set Default Paste'); }
    }];

    public onPaste(): void {
        console.log('Paste');
    }

    data2: Array<any> = [{
        text: 'My Profile'
    }, {
        text: 'Friend Requests'
    }, {
        text: 'Account Settings'
    }, {
        text: 'Support'
    }, {
        text: 'Log Out'
    }];

    private baseImageUrl2: string = "http://demos.telerik.com/kendo-ui/content/web/panelbar/";

    private imageUrl2(imageName: string): string {
        return this.baseImageUrl + imageName + ".jpg";
    }

}

