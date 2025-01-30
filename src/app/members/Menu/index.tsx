'use client';

import Link from 'next/link';
import styles from './index.module.css';
import Image from 'next/image';
import { useState } from 'react';
import cx from 'classnames';

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <div>
      {/* ナビゲーションメニュー */}
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <Link href={'/news'}>ニュース</Link>
          </li>
          <li>
            <Link href={'/members'}>メンバーズ</Link>
          </li>
          <li>
            <Link href={'/contact'}>お問い合わせ</Link>
          </li>
        </ul>
      </nav>

      {/* 閉じるボタン（メニューが開いているときのみ表示） */}
      {isOpen && (
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image src={'/close.svg'} alt="閉じる" width={24} height={24} />
        </button>
      )}

      {/* メニューボタン（メニューが閉じているときのみ表示） */}
      {!isOpen && (
        <button className={styles.button} onClick={open}>
          <Image src={'/menu.svg'} alt="メニュー" width={24} height={24} />
        </button>
      )}
    </div>
  );
}
