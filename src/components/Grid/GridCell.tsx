import React, { useState } from 'react';
import styles from './GridCell.module.css';
import PressWordmark from '@/components/common/PressWordmark/PressWordmark';
import Button from '@/components/common/Button/Button';
import { PressWordmarkProps } from '@/types/press';
import { useSubscription } from '../../contexts/SubscriptionContext';

const GridCell: React.FC<PressWordmarkProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isSubscribed, subscribe, unsubscribe } = useSubscription();

  const subscribed = isSubscribed(props.name);

  const handleSubscribe = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (subscribed) {
      unsubscribe(props.name);
    } else {
      subscribe(props.name);
    }
  };

  return (
    <div 
      className={`${styles.cell} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <Button 
          text={subscribed ? "해지하기" : "구독하기"} 
          onClick={handleSubscribe} 
        />
      ) : (
        <PressWordmark {...props} />
      )}
    </div>
  );
};

export default GridCell;