Ext.define('Inventori.store.Liskategori', {
    extend: 'Ext.data.Store',
    storeId: 'liskategori',
    alias: 'store.liskategori',
    autoLoad: true,
    autoSync: true,
    fields: [
        'nomor', 'id_kategori', 'nama_kategori', 'old_nama_kategori', 'id_user'
    ],


    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apikategori.php?action=1",
            create: "http://localhost/inventaris/apikategori.php?action=2",
            destroy: "http://localhost/inventaris/apikategori.php?action=3",
            update: "http://localhost/inventaris/apikategori.php?action=4",             
        },
        extraParams: {
        iduser : localStorage.getItem('id_user')
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
