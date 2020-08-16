Ext.define('Inventori.store.Lisbulankeluar', {
    extend: 'Ext.data.Store',
    storeId: 'lisbulankeluar',
    alias: 'store.lisbulankeluar',
    //autoLoad: true,
    //autoSync: true,
    fields: [
        'tahun'
    ],

    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apilaporan.php?action=3",
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

