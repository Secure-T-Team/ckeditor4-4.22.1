/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.dialog.add( 'about', function( editor ) {
	var lang = editor.lang.about,
		imagePath = CKEDITOR.getUrl( CKEDITOR.plugins.get( 'about' ).path + 'dialogs/' + ( CKEDITOR.env.hidpi ? 'hidpi/' : '' ) + 'logo_ckeditor.png' );

	return {
		title: lang.dlgTitle,
		minWidth: 390,
		minHeight: 210,
		contents: [ {
			id: 'tab1',
			label: '',
			title: '',
			expand: true,
			padding: 0,
			elements: [
				{
					type: 'html',
					html: '<style type="text/css">' +
						'.cke_about_container' +
						'{' +
							'color:#000 !important;' +
							'padding:10px 10px 0;' +
							'margin-top:5px' +
						'}' +
						'.cke_about_container p' +
						'{' +
							'margin: 0 0 10px;' +
						'}' +
						'.cke_about_container .cke_about_logo' +
						'{' +
							'height:81px;' +
							'background-color:#fff;' +
							'background-image:url(' + imagePath + ');' +
							( CKEDITOR.env.hidpi ? 'background-size:194px 58px;' : '' ) +
							'background-position:center; ' +
							'background-repeat:no-repeat;' +
							'margin-bottom:10px;' +
						'}' +
						'.cke_about_container a' +
						'{' +
							'cursor:pointer !important;' +
							'color:#00B2CE !important;' +
							'text-decoration:underline !important;' +
						'}' +
						'.cke_about_container > p,' +
						'.cke_rtl .cke_about_container > p' +
						'{' +
							'text-align:center;' +
						'}' +
						'.cke_about_version-check > strong' +
						'{' +
							'color: inherit;' +
						'}' +
						'</style>' +
						'<div class="cke_about_container">' +
							'<div>' +
								'<div class="title" style="margin-bottom: 10px;">Фишинг</div>' +
								'<div style="margin-bottom: 4px;">{{.FirstName}} - Имя</div>' +
								'<div style="margin-bottom: 4px;">{{.LastName}} - Фамилия</div>' +
								'<div style="margin-bottom: 4px;">{{.CurrentDay}} - День</div>' +
								'<div style="margin-bottom: 4px;">{{.CurrentMonth}} - Месяц</div>' +
								'<div style="margin-bottom: 4px;">{{.CurrentYear}} - Год</div>' +
								'<div style="margin-bottom: 4px;">{{.URL}} - ссылка на фиш. сайт</div>' +

								'<div class="title" style="margin-bottom: 10px;">Редактор шаблонов:</div>' +
								'<div style="margin-bottom: 4px;">{{platform_name}} - название платформы с гиперссылкой на сайт</div>' +
								'<div style="margin-bottom: 4px;">{{ip_address}} - ip адрес отправителя письма</div>' +
								'<div style="margin-bottom: 4px;">{{user_name}} - имя пользователя</div>' +
								'<div style="margin-bottom: 4px;">{{course_name}} - название курса</div>' +
								'<div style="margin-bottom: 4px;">{{course_left_days}} - кол-во дней до конца курса</div>' +
								'<div style="margin-bottom: 4px;">{{email}} - почта пользователя</div>' +
								'<div style="margin-bottom: 4px;">{{support_email}} - почта службы поддержки</div>' +
								'<div style="margin-bottom: 4px;">{{invite_url}} - ссылка на регистрацию</div>' +
								'<div style="margin-bottom: 4px;">{{notify_text}} - текст сообщения (заполняется администратором)</div>' +
								'<div style="margin-bottom: 4px;">{{link}} - ссылка на отчет</div>' +
								'<div style="margin-bottom: 4px;">{{organization_title}} - название организации</div>' +
							'</div>' +
						'</div>'
				}
			]
		} ],
		buttons: [ CKEDITOR.dialog.cancelButton ]
	};
} );
