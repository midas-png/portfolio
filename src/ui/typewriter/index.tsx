import { useState, useEffect, FC } from 'react';
import { TypewriterWrapper, TypewriterCursor, TypewriterText } from './styles';
import { IProps } from './props';

export const Typewriter: FC<IProps> = ({
  text,
  speed,
  eraseSpeed,
  typingDelay,
  eraseDelay,
  fontSize,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [__timeout, set__Timeout] = useState<number | null>(null);
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getRawText = () => {
    return typeof text === 'string' ? [text] : [...text];
  };

  const startTyping = () => {
    const timeout: number = window.setTimeout(() => {
      type();
    }, speed);
    set__Timeout(timeout);
  };

  const type = () => {
    const rawText = getRawText()[currentIndex];

    if (currentText.length < rawText.length) {
      const displayText = rawText.substring(0, currentText.length + 1);
      setCurrentText(displayText);
    }
  };

  const erase = () => {
    let index = currentIndex;
    if (currentText.length !== 0) {
      const displayText = currentText.substring(
        -currentText.length,
        currentText.length - 1
      );
      setCurrentText(displayText);
    } else {
      const textArray = getRawText();
      index = index + 1 === textArray.length ? 0 : index + 1;
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    startTyping();

    return () => {
      __timeout && clearTimeout(__timeout);
    };
  }, []);

  useEffect(() => {
    const rawText = getRawText()[currentIndex];
    if (isTyping) {
      if (currentText.length < rawText.length) {
        const timeout: number = window.setTimeout(type, speed);
        set__Timeout(timeout);
      } else {
        const timeout: number = window.setTimeout(erase, eraseDelay);
        setIsTyping(false);
        set__Timeout(timeout);
      }
    } else {
      if (currentText.length === 0) {
        const textArray = getRawText();
        const index =
          currentIndex + 1 === textArray.length ? 0 : currentIndex + 1;
        if (index === currentIndex) {
          setIsTyping(true);
          setTimeout(startTyping, typingDelay);
        } else {
          setTimeout(() => setCurrentIndex(index), typingDelay);
        }
      } else {
        const timeout: number = window.setTimeout(erase, eraseSpeed);
        set__Timeout(timeout);
      }
    }
    return () => {
      __timeout && clearTimeout(__timeout);
    };
  }, [currentText]);

  useEffect(() => {
    if (!isTyping) {
      setIsTyping(true);
      startTyping();
    }
    return () => {
      __timeout && clearTimeout(__timeout);
    };
  }, [currentIndex]);

  return (
    <TypewriterWrapper>
      <TypewriterText fontSize={fontSize}>
        {currentText}
        <TypewriterCursor fontSize={fontSize}>|</TypewriterCursor>
      </TypewriterText>
    </TypewriterWrapper>
  );
};
