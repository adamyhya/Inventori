/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Inventori.Application', {
    extend: 'Ext.app.Application',

    name: 'Inventori',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
       'Inventori.store.Lisbarang',
       'Inventori.store.Lisbarang1',
       'Inventori.store.Lisbarang2',
        'Inventori.store.Lisjurusan',
        'Inventori.store.Liskategori',
        'Inventori.store.Liskeluar',
        'Inventori.store.Lismasuk',
        'Inventori.store.Lissatuan',
        'Inventori.store.Lisuser',
        'Inventori.store.Listahunkeluar',
        'Inventori.store.Lisbulankeluar',
        'Inventori.store.Lislaporankeluar',
        'Inventori.store.Lislaporanmasuk',
        'Inventori.store.Listahunmasuk',
        'Inventori.store.Lisbulanmasuk',
        'Inventori.store.Lisaktifitas',
        'Inventori.store.Listahunlog',
        'Inventori.store.Lisbulanlog',
        'Inventori.store.Lisnotif',
        'Inventori.store.Auth',
        'Inventori.store.Readnotif'
    ],

    launch: function () {
         x = localStorage.getItem("LoggedIn");
         main = Ext.ComponentQuery.query("app-main")[0];        
        if (!x) {
            main.hide();
            this.overlay = Ext.Viewport.add({
                xtype: 'form-login',
                floated: true,
                showAnimation: {
                    type: 'popIn',
                    duration: 250,
                    easing: 'ease-out'
                },
                hideAnimation: {
                    type: 'popOut',
                    duration: 250,
                    easing: 'ease-out'
                },
                width: '100%',
                height: '100%',

                scrollable: true
            });
            this.overlay.show();
        }
        else{
            main.show();
        }
         if (localStorage.getItem('akses') === "3") { //reporter

            Ext.getCmp('aksese1').setDisabled(true);
            Ext.getCmp('ext-gridcolumn-73').setHidden(true);
            Ext.getCmp('showedtb7').setHidden(true);
            Ext.getCmp('buttonadd').setHidden(true);

            Ext.getCmp('ext-gridcolumn-7').setHidden(true);
            Ext.getCmp('showedtb').setHidden(true);
            Ext.getCmp('btnaddbrg').setHidden(true);

            Ext.getCmp('ext-gridcolumn-18').setHidden(true);
            Ext.getCmp('btnaddmsk').setHidden(true);
            Ext.getCmp('showedtb1').setHidden(true);
            
            Ext.getCmp('ext-gridcolumn-30').setHidden(true);
            Ext.getCmp('btnaddklr').setHidden(true);
            Ext.getCmp('showedtb2').setHidden(true);

            Ext.getCmp('ext-gridcolumn-56').setHidden(true);
            Ext.getCmp('showedtb3').setHidden(true);
            Ext.getCmp('btnaddktg').setHidden(true);

            Ext.getCmp('ext-gridcolumn-60').setHidden(true);
            Ext.getCmp('showedtb4').setHidden(true);
            Ext.getCmp('btnaddstn').setHidden(true);            

            Ext.getCmp('ext-gridcolumn-64').setHidden(true);
            Ext.getCmp('showedtb5').setHidden(true);
            Ext.getCmp('btnaddjrs').setHidden(true);            
                         
         }
        else if(localStorage.getItem('akses') === "2"){ //staff
            Ext.getCmp('aksese1').setDisabled(true);

            Ext.getCmp('ext-gridcolumn-73').setHidden(true);
            Ext.getCmp('showedtb7').setHidden(true);
            Ext.getCmp('buttonadd').setHidden(true);
            
         }
         Ext.getCmp('id_user1').setValue(localStorage.getItem('id_user'));
         Ext.getCmp('namause1').setValue(localStorage.getItem('nama_user'));
         Ext.getCmp('unamee1').setValue(localStorage.getItem('uname'));
         Ext.getCmp('pwde1').setValue(localStorage.getItem('pwd'));
         Ext.getCmp('aksese1').setValue(localStorage.getItem('akses'));
         Ext.getCmp('kontake1').setValue(localStorage.getItem('kontak'));
                            setInterval(function(){

                            thn = Ext.getCmp('tahun3').getValue();
                            store2 = Ext.getStore('lisnotif');
                            store2.proxy.extraParams = { iduser : localStorage.getItem('id_user') };
                            store2.load();
                            },5000);
                            
            setInterval(function(){
                            Ext.getStore('listahunlog').load();
                            store = Ext.getStore('lisbulanlog');
                            store.proxy.extraParams = { tahun : thn };
                            store.load();
                            store1 = Ext.getStore('lisaktifitas');
                            store1.proxy.extraParams = { tahun : thn };
                            store1.load();
                            
            },5000);

    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
